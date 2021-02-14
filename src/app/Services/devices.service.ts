import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Devices } from '../devices';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  deviceList: Devices[] = []
  url: string = 'https://devicemanager-6d339-default-rtdb.europe-west1.firebasedatabase.app/'

  constructor(private http: HttpClient) { }

  getDeviceList(): Devices[] {
    this.deviceList = []
    this.http.get(this.url + 'devices.json').subscribe((params) => {
      for (let key in params) {
        let device: Devices = new Devices(params[key].serial, params[key].description, params[key].type)
        device.id = key
        device.assigned = params[key].assigned
        this.deviceList.push(device)
      }
    })
    return this.deviceList
    // console.log(this.deviceList);
  }
  addToDeviceList(device: Devices) {
    this.http.post(this.url + 'devices.json', device).subscribe((params) => {
      for (let key in params) {
        console.log('added! with id', params[key]);
        device.id = params[key]
        this.deviceList.push(device)
      }
    })
  }
  deleteDevice(id: string) {
    this.http.delete(this.url + 'devices/' + id + '.json').subscribe((params) => {
      if (!params) {
        const index = this.deviceList.findIndex(el => el.id === id)
        this.deviceList.splice(index, 1)
        console.log('device removed successfully');

      } else {
        console.log('kati pige strava me ti diagrafi toy device...');
      }
    })

  }
  editDevice(id: string, device: Devices) {
    this.http.put(this.url + 'devices/' + id + '.json', device).subscribe((params) => {
      console.log('egine to edit kai epestrepse');
      console.log(params);

      let index = this.deviceList.findIndex(el => el.id === id);
      this.deviceList[index] = device
    })
  }
  getDevice(id: string): Devices {
    let index = this.deviceList.findIndex(el => el.id === id)
    return this.deviceList[index];
  }

  setDeviceToAssigned(deviceID: string) {
    const index = this.deviceList.findIndex(el => el.id === deviceID)
    console.log(index);

    this.deviceList[index].assigned = true;
    console.log(this.deviceList[index]);

    this.editDevice(deviceID, this.deviceList[index])
  }
  unAssignDevice(deviceID: string) {
    const index = this.deviceList.findIndex(el => el.id === deviceID)
    this.deviceList[index].assigned = false
    const updatedDevice = this.deviceList[index]
    this.editDevice(deviceID, updatedDevice);
  }
}
