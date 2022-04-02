import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  
  

  constructor(private router : Router) {
    
   }

  
clickme(id:any){
  this.router.navigateByUrl('family/'+id)

}
  ngOnInit(): void {

  }

}
