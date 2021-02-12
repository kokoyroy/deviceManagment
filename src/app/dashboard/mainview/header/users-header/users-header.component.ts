import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.css']
})
export class UsersHeaderComponent implements OnInit {
  @Input() name: string;
  @Input() email: string;
  @Input() add:boolean;


    constructor() { }

  ngOnInit(): void {
  }

}
