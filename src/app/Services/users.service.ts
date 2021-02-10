import { Injectable } from '@angular/core';
import { Users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userList:Users[]= []
  constructor() { }

  adduser(user:Users){
    this.userList.push(user)
  }
  getUsers():Users[]{
    return this.userList
  }
}
