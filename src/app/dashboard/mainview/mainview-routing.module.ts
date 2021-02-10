import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'devices', component: DevicesComponent }
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
