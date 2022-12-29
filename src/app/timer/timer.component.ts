import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {

  private daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  public date: Date = new Date();
  public month: string = this.date.toLocaleString('default', { month: 'short' });
  public hour: any;
  public minute: any;
  public second: any;
  public ampm: any;
  public day: any;
  public timezone: any;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000);//update in each second.

    this.day = this.daysArray[this.date.getDay()];  //Get weekdays from the array
  }

  private updateDate(date: Date) {
    const hours = date.getHours();  //get the hours from the date
console.log(hours);

    this.ampm = hours >= 12 ? 'PM' : 'AM';

    this.hour = hours % 12; //convert 12 hours format.
    console.log(this.hour);

    this.hour = this.hour ? this.hour : 12; //If the hour is 0 then 12 is assigned to it.

    this.hour = this.hour < 10 ? '0' + this.hour : this.hour; //Add 0 infront of hour.

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();       //Add 0 in front of minute

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();        //add 0 infront of second

    this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;       //Get timezone
  }
}
