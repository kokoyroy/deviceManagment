import { Component, OnInit } from '@angular/core';
import { Devices } from 'src/app/devices';
import { DevicesService } from 'src/app/Services/devices.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  serial: string;
  description: string;
  type: number;
  constructor(private deviceService:DevicesService) { }

  ngOnInit(): void {
  }
  addDevice() {
    this.deviceService.addToDeviceList(new Devices(this.serial, this.description, this.type))
    this.serial = ''
    this.description = ''
    this.type = null;

  }

}
