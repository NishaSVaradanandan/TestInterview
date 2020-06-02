import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-essay',
  templateUrl: './write-essay.component.html',
  styleUrls: ['./write-essay.component.css']
})
export class WriteEssayComponent implements OnInit {

  constructor() { 
    this.startTimer()
  }

  ngOnInit(): void {
  }
 timeOut="";
 typedText="";
 isDisabled:boolean =false;
 getWordCount()
        {
          var wordCount =this.typedText.split(" ").length-1;
            if(wordCount >=4)
            {
              this.disableTextArea();
            }
          return this.typedText.split(" ").length-1;
        }

 disableTextArea()
          {
            this.isDisabled=true;
          }
 counter:{min: number,sec: number}
   
 startTimer()
          {
            this.counter={min:0,sec:60}
            let intervalId=setInterval(()=>{
              if(this.counter.sec - 1 == -1){
                this.counter.min -= 1;
                this.counter.sec = 59
              }
              else this.counter.sec -= 1
              // this.counter.min = this.counter.min < 10 ? "0" + this.counter.min : this.counter.min;
              // this.counter.sec = this.counter.sec < 10 ? "0" + this.counter.sec : this.counter.sec;
              if(this.counter.min == 0 && this.counter.sec == 0)
              {
               this.timeOut="Time Out";
               this.isDisabled=true;
               clearInterval(intervalId);
              }
            },1000)
          }
}
