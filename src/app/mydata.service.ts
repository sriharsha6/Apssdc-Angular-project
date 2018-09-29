import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor() { }
  obj={
    no:1,
    name:'Digital lync',
    email:'dlguntur@digitallynctech.com'
  };
  running(){
    return "i am running";
  }
  obj1={
    no:2,
    name:'',
    email:'ajrsriharsha@gmail.com'
  };
  run(){
    return "Run Harsha"
  }
}
