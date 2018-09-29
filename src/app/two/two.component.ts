import { Component, OnInit } from '@angular/core';
import { MydataService } from './../mydata.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  title="list of courses"
  courses=['devops',
          'fullstack',
          'blockchain']
  constructor() { }

  ngOnInit() {
  }
show:boolean=false;
}
