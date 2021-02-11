import { Component, OnInit } from '@angular/core';
import { Devices } from 'src/app/devices';
import { DevicesService } from 'src/app/Services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices: Devices[] = []
  constructor(private deviceService: DevicesService) { }
  serial: string;
  description: string;
  type: number;


  ngOnInit(): void {
    this.devices = this.deviceService.getDeviceList();
  }
  addDevice() {
    this.deviceService.addToDeviceList(new Devices(this.serial, this.description, this.type))
    this.serial = ''
    this.description = ''
    this.type = null;

  }
  deleteDevice(id:string){
    console.log(id);
    
    this.deviceService.deleteDevice(id)
  }

}
