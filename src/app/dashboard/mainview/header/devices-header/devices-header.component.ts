import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices-header',
  templateUrl: './devices-header.component.html',
  styleUrls: ['./devices-header.component.css']
})
export class DevicesHeaderComponent implements OnInit {
  @Input() description: string
  @Input() serial: string



  constructor() { }

  ngOnInit(): void {
  }

}
