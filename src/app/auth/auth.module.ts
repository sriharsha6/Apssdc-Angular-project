import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Student1Component } from './student1/student1.component';
import { Student2Component } from './student2/student2.component';
import { Student3Component } from './student3/student3.component';
import { Student4Component } from './student4/student4.component';
// import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    // AppComponent,
    Student1Component,
    Student2Component,
    Student3Component,
    Student4Component],
  imports: [
    BrowserModule
  ],
  exports:[
    Student1Component,
    Student2Component,
    Student3Component,
    Student4Component
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
