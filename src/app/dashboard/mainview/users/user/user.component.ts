import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  email: string;
  user: Users
  constructor(private usersServie: UsersService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id')
      this.user = this.usersServie.getUser(id)
      this.name = this.user.name;
      this.email = this.user.email
    })
  }

  edituser(id: string) {
    let user = new Users(id, this.name, this.email)
    this.usersServie.editUser(id, user)
    this.router.navigate(['users'])
    
  }

  cancel() {
    this.router.navigate(['users'])

  }

}
