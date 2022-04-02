import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyComponent } from './family/family.component';
import { MemberComponent } from './member/member.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent4Component } from './parent4/parent4.component';

const routes: Routes = [
 {path:"member", component:MemberComponent},
 {path:"family/:userId", component:FamilyComponent},
 {path:"child", component:ChildComponentComponent},
 {path:"parent", component:ParentComponentComponent},
 {path:"parent1", component:Parent1Component},
 {path:"parent2", component:Parent2Component},
 {path:"child1", component:Child1Component},
 {path:"child2", component:Child2Component},
 {path:"parent4", component:Parent4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
