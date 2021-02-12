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

 

  ngOnInit(): void {
    this.usersList = this.usersService.getUsers();
  }
  
  deleteUser(id:string){
    this.usersService.deleteUser(id)
  }
}
