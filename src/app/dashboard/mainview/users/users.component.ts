import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersList: Users[] = []
  constructor(private usersService: UsersService) { }

  name: string;
  email: string;
  id: string;

  ngOnInit(): void {
    this.usersList = this.usersService.getUsers();
  }
  addUser() {
    const user = new Users(this.id, this.name, this.email)
    this.usersService.adduser(user)
    this.name = ''
    this.email = ''
  }
  deleteUser(id:string){
    this.usersService.deleteUser(id)
  }
}
