import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'https://devicemanager-6d339-default-rtdb.europe-west1.firebasedatabase.app/';
  userList: Users[] = []
  constructor(private http: HttpClient) { }


  getUsers(): Users[] {
    this.http.get(this.url + 'users.json').subscribe((users) => {
      // console.log(users);
      for (const key in users) {
        this.userList.push(users[key])
      }
      // console.log(this.userList);
    })
    return this.userList
  }
  adduser(user: Users) {
    this.http.post(this.url + 'users.json', user).subscribe((params) => {
      for (const key in params) {
        user.id = params[key];
      }
      this.userList.push(user)
    })
  }
}
