import { Component, OnInit, ViewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {
  
  @ViewChild('child2')
  public child2: Child2Component = new Child2Component;

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
 

  ngAfterViewInit() {
    
    }

}
