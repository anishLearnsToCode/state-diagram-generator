import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-message',
  templateUrl: './dynamic-message.component.html',
  styleUrls: ['./dynamic-message.component.sass']
})
export class DynamicMessageComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit(): void {
  }
}
