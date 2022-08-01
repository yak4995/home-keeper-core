export interface SessionOutputPort {
  signIn(output: any): Promise<any>;
  verifyUser(output: any): Promise<any>;
  signOut(output: any): Promise<any>;
}
