import type { ID } from '../../..';

type TreeEntity = { id: ID; parent?: { id: ID } | null };

// Takes a list of entities in some hierarcy
// returns them in an order where parents come before their children
// throwing an error if a cycle is detected
export function parentsFirst<T extends TreeEntity>(entities: T[]): T[] {
  const remaining = new Map(entities.map((entity) => [entity.id, entity]));

  const result: T[] = [];

  while (remaining.size) {
    // Find all entities that have no parent at all or in the remaining set
    const ready = [...remaining.values()].filter(({ parent }) => !parent || !remaining.has(parent.id));

    if (!ready.length) {
      throw new Error('Cycle in entity hierarchy');
    }

    for (const entity of ready) {
      result.push(entity);
      remaining.delete(entity.id);
    }
  }

  return result;
}

// Returns the roots (entities without parents in selected set) of a set of entities for deletion
export function deletionRoots<T extends TreeEntity>(
  // List of entities to consider for deletion
  entities: T[],
  // List of selected IDs to consider for deletion; if not provided, all entities are considered
  selectedIds = entities.map(({ id }) => id),
): T[] {
  // check that the entities do not contain cycles and are ordered such that parents come before children
  parentsFirst(entities);

  const all = new Map(entities.map((entity) => [entity.id, entity]));
  const selected = new Set(selectedIds);

  return entities.filter((entity) => {
    // if not selected, skip
    if (!selected.has(entity.id)) {
      return false;
    }

    const visited = new Set<ID>([entity.id]);

    // recursively getting roots, if their parent is selected for deletion, this entity is not a root
    let parent = entity.parent;

    while (parent) {
      if (visited.has(parent.id)) {
        throw new Error('Cycle in entity hierarchy');
      }

      // if parent is not selected for deletion, skip
      if (selected.has(parent.id)) {
        return false;
      }

      visited.add(parent.id);
      parent = all.get(parent.id)?.parent;
    }

    return true;
  });
}

// Utility function to execute a series of compensation actions,
// collecting any errors that occur and throwing an AggregateError if any actions fail
export async function compensateAll(actions: (() => Promise<unknown>)[]): Promise<void> {
  const errors: unknown[] = [];

  for (const action of actions) {
    try {
      await action();
    } catch (error) {
      errors.push(error);
    }
  }

  if (errors.length) {
    throw new AggregateError(errors, 'Compensation failed');
  }
}
