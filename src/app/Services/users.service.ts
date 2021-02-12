import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
        if (users[key].devices) {
          user.devices = users[key].devices
        }
        this.userList.push(user)
      }
    })
    // console.log(this.userList);
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
  //returns a single user 
  getUser(id: string): Users {
    const index = this.userList.findIndex(el => el.id === id)
    return this.userList[index]
  }

  //method for editing users
  editUser(id: string, user: Users) {
    this.http.put(this.url + 'users/' + id + '.json', user).subscribe((params) => {
      const index = this.userList.findIndex(el => el.id === id)
      this.userList[index] = user
    })
  }

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
  addDeviceToUser(userID: string, deviceID: string) {
    const index = this.userList.findIndex(el => el.id === userID);
    this.userList[index].devices.push(deviceID)
    const user = this.userList[index]
    this.http.put(this.url + 'users/' + userID + '.json', user).subscribe((params) => {
      console.log('user edited and device added');

      console.log(params);

    })
  }




}
