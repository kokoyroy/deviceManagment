import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Devices } from 'src/app/devices';
import { DevicesService } from 'src/app/Services/devices.service';
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
  allDevices: Devices[] = [];
  availableDevices: Devices[] = [];

  constructor(private usersServie: UsersService, private activatedRoute: ActivatedRoute, private router: Router, private deviceService: DevicesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id')
      this.user = this.usersServie.getUser(id)
      this.name = this.user.name;
      this.email = this.user.email
    })
    this.allDevices = this.deviceService.deviceList
    this.availableDevices = this.allDevices.filter(el => el.assigned === false)
    console.log('none', this.availableDevices);
    console.log(this.allDevices);
    
    
  }
  add(deviceID: string, userID: string) {
    this.usersServie.addDeviceToUser(userID, deviceID)
    this.deviceService.setDeviceToAssigned(deviceID)
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
