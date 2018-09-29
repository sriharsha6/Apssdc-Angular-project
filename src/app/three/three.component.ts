import { Component, OnInit } from '@angular/core';
import { MydataService } from './../mydata.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor(private newService:MydataService){}
  ngOnInit(){
    console.log(this.newService.run());
    console.log(this.newService.obj1);
  }

}
