import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  name='Harsha';
  day=new Date(2018,8,29)
  constructor() { }

  ngOnInit() {
    
  }
  
}
