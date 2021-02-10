export class Devices {
    constructor(private serial: string, private description: string, private type: number) { }

    getDeviceSerial(): string {
        return this.serial
    }
    setDeviceSerial(serial: string): void {
        this.serial = serial
    }
    getDeviceDescription(): string {
        return this.description
    }
    setDeviceDescription(description: string): void {
        this.description = description
    }
    getDeviceType(): number {
        return this.type
    }
    setDeviceType(type: number) {
        this.type = type
    }
}
