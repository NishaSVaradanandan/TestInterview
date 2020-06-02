import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';  

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
 
export class WritingComponent implements OnInit {
  
  constructor(private router: Router, ) {}  
    onSubmit() {  
        this.router.navigate(['/EssayTopics'])  
    }  
    ngOnInit() {}
}
