import { Injectable } from '@angular/core';
import { PERMISSIONS } from './permissions';
import { USER } from '../../interfaces/user';
import { PERMISSION } from '../../interfaces/permission';

@Injectable()
export class AuthServiceProvider {

  private isLoggedIn = false;
  private user: PERMISSION;

  constructor() {
    console.log('Hello AuthServiceProvider Provider');
  }

  // Login a user
  // Normally make a server request and store
  // e.g. the auth token
  login(user: USER) : void {
    PERMISSIONS.forEach( (u: PERMISSION) => {
      if(u.user === user.username && u.pass === user.password){
        this.user = u;
        this.isLoggedIn = true;
        return;
      }
    });    
  }

  getUser(){
    return this.user;
  }

  getUserPermissions(page: string): boolean{
    console.log('this.user.allowedComponents.indexOf(page) != -1', this.user.allowedComponents.indexOf(page) != -1);
    
    return this.user.allowedComponents.indexOf(page) != -1;
  }
 
  // Logout a user, destroy token and remove
  // every information related to a user
  logout() : void {
    this.isLoggedIn = false;
  }
 
  // Returns whether the user is currently authenticated
  // Could check if current token is still valid
  authenticated() : boolean {
    return this.isLoggedIn;
  }

}