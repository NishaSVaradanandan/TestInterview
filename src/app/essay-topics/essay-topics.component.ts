import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';  

@Component({
  selector: 'app-essay-topics',
  templateUrl: './essay-topics.component.html',
  styleUrls: ['./essay-topics.component.css']
})

export class EssayTopicsComponent implements OnInit {
  essays: any
  constructor() {
    this.essays=[
        {id:1 , name:'Architecture Design'},
        {id:2 , name:'Study and Employement'},
        {id:3 , name:'Advantages and disavantages of invension'},
        {id:4 , name:'ExtraCurricular Activities'},
        {id:5 , name:'Population Problem'},
        {id:6 , name:'Environmental Changes'}
    ];
   }

  ngOnInit() {
  }
}
