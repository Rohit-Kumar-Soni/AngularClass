import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onMessage(message: Message) {
    // display message
    console.log(message)
  }

}
