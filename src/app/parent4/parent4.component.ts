import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.css']
})
export class Parent4Component implements OnInit {

  myName : string = "Choti";
  myName5 : string = "Rohit 5";
  myColorName : string = "red";


  title:string = "";
  constructor() { }

  ngOnInit(): void {
    //this.Praveen = "Praveen Kumar";
  }

}
