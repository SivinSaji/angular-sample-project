import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {

  ngOnInit(): void {
  this.dateFunction();
  }

  allDates:any = []
  date = new Date();
  monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  month = this.monthArray[this.date.getMonth()];
  currentDate = this.date.toDateString();
  lastDay:any = new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate();
  prevLastDay:any = new Date(this.date.getFullYear(),this.date.getMonth(),0).getDate();
  firstDayIndex =4 ;
  public dateFunction(){
    let count = 0;
    console.log(this.prevLastDay);
    
    for(let x = this.firstDayIndex; x>0;x--){
      this.allDates[count]=this.prevLastDay-x+1;
      count++;
    }


    for(let i = 1; i<=this.lastDay;i++){
      this.allDates[count]=i;
      count++;
    }
  }
}
