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
  userDevices: string[];
  allDevices: Devices[] = [];
  availableDevices: Devices[] = [];

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute, private router: Router, private deviceService: DevicesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id')
      //getUser is asynchronous i must fix that
      this.user = this.usersService.getUser(id)
      // ************************************
      this.name = this.user.name;
      this.email = this.user.email
      this.userDevices = this.user.devices
      //******************************** */
    })
    this.allDevices = this.deviceService.deviceList
    this.availableDevices = this.allDevices.filter(el => el.assigned === false)
    // console.log('none', this.availableDevices);
    // console.log(this.allDevices);


  }
  add(deviceID: string, userID: string) {
    this.usersService.addDeviceToUser(userID, deviceID)
    this.deviceService.setDeviceToAssigned(deviceID)
    this.refresh()
  }

  edituser(id: string) {
    const index = this.usersService.userList.findIndex(el => el.id === id)
    this.usersService.userList[index].name = this.name
    this.usersService.userList[index].email = this.email
    this.usersService.editUser(id, this.usersService.userList[index])
    this.router.navigate(['users'])

  }
  refresh() {
    this.allDevices = this.deviceService.deviceList
    this.availableDevices = this.allDevices.filter(el => el.assigned === false)
  }
  cancel() {
    this.router.navigate(['users'])
  }
  removeDevice(deviceId: string) {
    this.usersService.removeDeviceFromUser(deviceId, this.user.id)
    this.deviceService.unAssignDevice(deviceId)
    this.refresh()
  }

}
