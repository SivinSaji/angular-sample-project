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

  public dateFunction(){
    for(let i = 1; i<=this.lastDay;i++){
      this.allDates[i-1]=i;
    }
  }
}
