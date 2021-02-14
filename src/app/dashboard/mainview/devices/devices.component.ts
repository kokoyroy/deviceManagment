import { Component, OnInit } from '@angular/core';
import { Devices } from 'src/app/devices';
import { DevicesService } from 'src/app/Services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices: Devices[]
  constructor(private deviceService: DevicesService) { }
  


  ngOnInit(): void {
    this.devices = this.deviceService.getDeviceList();
  }
  
  deleteDevice(id:string){    
    this.deviceService.deleteDevice(id)
  }

}
