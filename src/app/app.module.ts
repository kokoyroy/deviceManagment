import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { MainviewComponent } from './dashboard/mainview/mainview.component';
import { UsersService } from './Services/users.service';
import { DevicesService } from './Services/devices.service';
import { UsersComponent } from './dashboard/mainview/users/users.component';
import { UserComponent } from './dashboard/mainview/users/user/user.component';
import { DevicesComponent } from './dashboard/mainview/devices/devices.component';
import { DeviceComponent } from './dashboard/mainview/devices/device/device.component';
import { MainviewRoutingModule } from './mainview-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersHeaderComponent } from './dashboard/mainview/header/users-header/users-header.component';
import { DevicesHeaderComponent } from './dashboard/mainview/header/devices-header/devices-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdduserComponent } from './dashboard/mainview/users/adduser/adduser.component';
import { AddDeviceComponent } from './dashboard/mainview/devices/add-device/add-device.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    MainviewComponent,
    UsersComponent,
    UserComponent,
    DevicesComponent,
    DeviceComponent,
    UsersHeaderComponent,
    DevicesHeaderComponent,
    AdduserComponent,
    AddDeviceComponent,
    
  ],
  imports: [
    BrowserModule,
    MainviewRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [UsersService, DevicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
