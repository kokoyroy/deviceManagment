import { Devices } from "./devices";

export class Users {
     devices:string[]=[]
    constructor(public id: string, public name: string, public email: string) {

    }
    getDevices(): string[] {
        return this.devices
    }
    addDevice(device: string) {
        this.devices.push(device)
    }
    // deleteDevice(serial: string) {
    //     const newDevices: Devices[] = this.devices.filter(el => el.getDeviceSerial() !== serial)
    //     this.devices = [...newDevices]
    // }
    // editDevice(serial: string, device: Devices) {
    //     const index = this.devices.findIndex(el => el.getDeviceSerial() === serial)
    //     this.devices[index] = device
    // }

}
