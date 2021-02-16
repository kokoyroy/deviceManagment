import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './dashboard/mainview/users/users.component';
import { DevicesComponent } from './dashboard/mainview/devices/devices.component';
import { UserComponent } from './dashboard/mainview/users/user/user.component';
import { DeviceComponent } from './dashboard/mainview/devices/device/device.component';
import { AdduserComponent } from './dashboard/mainview/users/adduser/adduser.component';
import { AddDeviceComponent } from './dashboard/mainview/devices/add-device/add-device.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AdduserComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'devices/add', component: AddDeviceComponent },
  { path: 'devices/:id', component: DeviceComponent },
  { path: '', component: UsersComponent, pathMatch: 'full' },
  { path: '**' , component: UsersComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class MainviewRoutingModule { }
