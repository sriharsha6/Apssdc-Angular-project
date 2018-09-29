import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { AuthModule } from './auth/auth.module';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { RouterModule,Routes } from '@angular/router';
import { MydataService } from './mydata.service';
import { FiveComponent } from './five/five.component';


const routes: Routes = [
  { path: 'three', component: ThreeComponent },  
  { path: 'four', component: FourComponent},
  { path:'five',component:FiveComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
