import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyComponent } from './family/family.component';
import { MemberComponent } from './member/member.component';
import {HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent4Component } from './parent4/parent4.component';
import { Child4Component } from './child4/child4.component';
import { Child5Component } from './child5/child5.component';
import { Child6Component } from './child6/child6.component';


@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    MemberComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    Parent1Component,
    Child1Component,
    Child2Component,
    Parent2Component,
    Parent4Component,
    Child4Component,
    Child5Component,
    Child6Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
