import { Component,OnInit } from '@angular/core';
import { MydataService } from './mydata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='MyFirstApp'
  Counter:number;
  student1="Hello this is one student";
  displayCounter(count){
    console.log(count);
    this.Counter=count;
  }
  constructor(private newService:MydataService){}
  ngOnInit(){
    console.log(this.newService.running());
    console.log(this.newService.obj);
  }
}

