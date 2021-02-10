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
import { MainviewRoutingModule } from './dashboard/mainview/mainview-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    MainviewComponent,
    UsersComponent,
    UserComponent,
    DevicesComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    MainviewRoutingModule,FormsModule
  ],
  providers: [UsersService,DevicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
