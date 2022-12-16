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
  events: any = [{ date: 1670636748000, title: 'event 1' }, { date: 1670635748000, title: 'event 2' }, { date: 1670436748000, title: 'event 3' }, { date: 1620636748000, title: 'test4' }];
  eventLayer: any;

  ngOnInit(): void {
    this.dateFunction();
  }

  public dateFunction() {
    this.today = new Date();
    this.allDates = [];
    this.month = this.monthArray[this.date.getMonth()];

    const lastDay: any = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
    const firstDay: any = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    const prevMonthLastDay: any = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();
    const todayString: string = this.today.toDateString();

    let isFirstClass = ' first-of-month';
    for (let x = firstDayIndex; x > 0; x--) {
      const dateVal = prevMonthLastDay.getDate() - x + 1;
      const calculatedDate: Date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, dateVal);
      const calculatedDateString: string = calculatedDate.toDateString();
      const dateClass: string = (calculatedDateString === todayString) ? ' current-date' : '';
      this.allDates.push({ class: 'prev-month' + dateClass + isFirstClass, dateNumber: dateVal, date: calculatedDate, dateString: calculatedDateString });
      isFirstClass = '';
    }

    isFirstClass = ' first-of-month';
    const lastDateOfMonth: number = lastDay.getDate();

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const calculatedDate: Date = new Date(this.date.getFullYear(), this.date.getMonth(), i);
      const calculatedDateString: string = calculatedDate.toDateString();
      const dateClass: string = (calculatedDateString === todayString) ? ' current-date' : '';
      this.allDates.push({ class: 'cur-month' + dateClass + isFirstClass, dateNumber: i, date: calculatedDate, dateString: calculatedDateString });
      isFirstClass = '';
    }

    isFirstClass = ' first-of-month';
    for (let j = 1; j < (7 - lastDayIndex); j++) {
      const calculatedDate: Date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, j);
      const calculatedDateString: string = calculatedDate.toDateString();
      const dateClass: string = (calculatedDateString === todayString) ? ' current-date' : '';
      this.allDates.push({ class: 'next-month' + dateClass + isFirstClass, dateNumber: j, date: calculatedDate, dateString: calculatedDateString });
      isFirstClass = '';
    }

    this.injectEventsToCalendar();
  }

  injectEventsToCalendar(): void {
    let eventDictionary: any = [];

    for (const event of this.events) {
      const dateTime: Date = new Date(event.date);
      const eventDateString: string = dateTime.toDateString();
      const eventTime: string = dateTime.toLocaleTimeString();

      if (!eventDictionary[eventDateString]) {
        eventDictionary[eventDateString] = [];
      }

      eventDictionary[eventDateString].push(event.title + " : " + eventTime);
      console.log(eventDictionary);
    }

    for (const dateObject of this.allDates) {
      console.log(dateObject);

      dateObject.events = eventDictionary[dateObject.dateString];
      dateObject.time = eventDictionary[dateObject.dateString];
    }
  }

  randomizeEvents(): void {
    const tempEvents: any = [];
    const count: number = Math.round(Math.random() * 10);
    const dateOffset: number = Math.round(Math.random() * 15);

    for (let i = 0; i < count; i++) {
      tempEvents.push({ date: new Date(this.date.getFullYear(), this.date.getMonth(), dateOffset * (i + 1)), title: 'Event ' + i });
    }

    this.events = tempEvents;
    this.injectEventsToCalendar();
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

  eventDetails(day: any): void {
    this.eventLayer = day;
  }

  closeEventDetails(): void {
    this.eventLayer = undefined;
  }
}
