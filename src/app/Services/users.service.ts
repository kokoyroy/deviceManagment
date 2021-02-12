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

  //method to get the users and put them on the array to be passed to the users component
  getUsers(): Users[] {
    this.userList = [];
    this.http.get(this.url + 'users.json').subscribe((users) => {
      for (const key in users) {
        let user: Users = new Users(key, users[key].name, users[key].email)
        this.userList.push(user)
      }
    })
    console.log(this.userList);

    return this.userList
  }
  // method for adding users
  adduser(user: Users): void {
    this.http.post(this.url + 'users.json', user).subscribe((params) => {
      for (const key in params) {
        user.id = params[key];
      }
      this.userList.push(user)
    })
  }
  getUser(id: string): Users {
    const index = this.userList.findIndex(el => el.id === id)
    return this.userList[index]
  }

  //method for editing users

  //method for deleting users
  deleteUser(id: string) {
    this.http.delete(this.url + 'users/' + id + '.json').subscribe((params) => {
      if (!params) {
        let index = this.userList.findIndex(el => el.id === id);
        this.userList.splice(index, 1);
      } else {
        console.log('user did not deteled succesfully... something went wrong');

      }
    })
  }





}
