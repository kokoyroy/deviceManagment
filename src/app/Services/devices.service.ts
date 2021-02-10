import { Injectable } from '@angular/core';
import { Devices } from '../devices';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  deviceList: Devices[] = []


  constructor() { }

  getDeviceList(): Devices[] {
    return this.deviceList
  }
  addToDeviceList(device: Devices) {
    this.deviceList.push(device)
  }
  deleteDevice(serial: string) {
    const newDevices: Devices[] = this.deviceList.filter(el => el.getDeviceSerial() !== serial)
    this.deviceList = [...newDevices]
  }
  editDevice(serial: string, device: Devices) {
    const index = this.deviceList.findIndex(el => el.getDeviceSerial() === serial)
    this.deviceList[index] = device
  }
}
