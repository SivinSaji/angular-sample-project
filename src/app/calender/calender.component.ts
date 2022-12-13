import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {

  date = new Date();

  monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  month = this.monthArray[this.date.getMonth()];
  currentDate = this.date.toDateString();
}

