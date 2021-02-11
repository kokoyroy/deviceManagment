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
        this.deviceList.push(device)
      }
    })
    console.log(this.deviceList);
    return this.deviceList
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
      if(!params){
        const index = this.deviceList.findIndex(el => el.id === id)
        this.deviceList.splice(index, 1)
        console.log('device removed successfully');
        
      }else{
        console.log('kati pige strava me ti diagrafi toy device...');
      }
    })

  }
  editDevice(serial: string, device: Devices) {
    // const index = this.deviceList.findIndex(el => el.getDeviceSerial() === serial)
    // this.deviceList[index] = device
  }
}
