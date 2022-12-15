import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent {
  date: Date = new Date();
  today: Date = new Date();
  month: string = '';
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthArray: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  allDates: any = [];
  events: any = [];

  ngOnInit(): void {
    this.dateFunction();
  }
  public dateFunction() {
    this.today = new Date();
    this.allDates = [];
    this.month = this.monthArray[this.date.getMonth()];

    const lastDay: any = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
    const firstDay: any = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    const prevLastDay: any = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();
    const todayString: string = this.today.toDateString();
    const calculatedDate: Date = new Date(this.date.getFullYear(), this.date.getMonth(), 30);

    let isFirstClass = ' first-of-month';
    for (let x = firstDayIndex; x > 0; x--) {
      const dateVal = prevLastDay.getDate() - x + 1;
      const calculatedDate: Date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, dateVal);
      const dateClass: string = (calculatedDate.toDateString() === todayString) ? ' current-date' : '';
      this.allDates.push({ class: 'prev-month' + dateClass + isFirstClass, dateNumber: dateVal, date: calculatedDate });
      isFirstClass = '';
    }

    isFirstClass = ' first-of-month';
    const lastDateOfMonth: number = lastDay.getDate();
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const calculatedDate: Date = new Date(this.date.getFullYear(), this.date.getMonth(), i);
      const dateClass: string = (calculatedDate.toDateString() === todayString) ? ' current-date' : '';
      this.allDates.push({ class: 'cur-month' + dateClass + isFirstClass, dateNumber: i, date: calculatedDate });
      isFirstClass = '';
    }

    isFirstClass = ' first-of-month';
    for (let j = 1; j < (7 - lastDayIndex); j++) {
      const calculatedDate: Date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, j);
      const dateClass: string = (calculatedDate.toDateString() === todayString) ? ' current-date' : '';
      this.allDates.push({ class: 'next-month' + dateClass + isFirstClass, dateNumber: j, date: calculatedDate });
      isFirstClass = '';
    }
  }

  leftSwitch(): void {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.dateFunction();
  }

  rightSwitch(): void {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
    this.dateFunction();
  }

  todayDate(): void {
    this.date = new Date();
    this.dateFunction();
  }
}
