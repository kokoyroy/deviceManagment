import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  name: string;
  email: string;
  id: string;

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }
  addUser() {
    const user = new Users(this.id, this.name, this.email)
    this.usersService.adduser(user)
    this.name = ''
    this.email = ''
  }

}
