import { Devices } from "./devices";

export class Users {
    private devices: Devices[] = []
    constructor(public id: string, public name: string, public email: string) {

    }
    getDevices(): Devices[] {
        return this.devices
    }
    setDevices(device: Devices) {
        this.devices.push(device)
    }
    deleteDevice(serial: string) {
        const newDevices: Devices[] = this.devices.filter(el => el.getDeviceSerial() !== serial)
        this.devices = [...newDevices]
    }
    editDevice(serial: string, device: Devices) {
        const index = this.devices.findIndex(el => el.getDeviceSerial() === serial)
        this.devices[index] = device
    }

}
