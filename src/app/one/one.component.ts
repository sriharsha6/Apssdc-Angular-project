import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  @Output() valuechange = new EventEmitter(); 
  Counter=0;


  @Input() student1="string"
  imgSrc="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350";
  onSubmit(){
    console.log('Hello');
    alert("hello");
  }
name:string="Harsha"

  constructor() { }

  ngOnInit() {
  }
  // handleclick(){
  //   console.log("hi I am clicking the one component")
  // }
  valueChanged(){
    this.Counter+= 1;
    this.valuechange.emit(this.Counter);
  }

}
