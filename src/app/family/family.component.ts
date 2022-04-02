import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  userId:any;
  constructor(private activatedRoute : ActivatedRoute ) { 
    this.activatedRoute.paramMap.subscribe(params=>{
      this.userId=params.get('userId') //+ string to number
      
  })
  }

  ngOnInit(): void {
    console.log("aaaaaaaaaaaaaaaaaaaaaa")
    console.log(this.userId)
  }

 

}
