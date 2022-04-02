import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

   // Output decorator  to notify a parent component from a child component
   @Output() emitData = new EventEmitter<Message>();
   
  constructor() { }

  ngOnInit(): void {
  }

  getMessage() {

    // get data from the server or perform some action ..
    // send message notification to parent component.
    this.sendMessage();
  }
  private sendMessage() {
    this.emitData.next({ message: 'test message', date: new Date().toLocaleDateString() });
    //this.emitData.emit("Button Click!!!");
  }

}
