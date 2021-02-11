import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Devices } from 'src/app/devices';
import { DevicesService } from 'src/app/Services/devices.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  device: Devices
  id: string
  serial: string;
  description: string;
  type: number;
  constructor(private deviceService: DevicesService, private activeRouter: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      this.id = param.get('id')
      this.device = this.deviceService.getDevice(this.id)
    })
  }
  editDevice(id: string) {
    this.deviceService.editDevice(id, new Devices(this.serial, this.description, this.type))
    this.router.navigate(['devices'])
  }
  cancel(){
    this.router.navigate(['devices'])
  }

}
