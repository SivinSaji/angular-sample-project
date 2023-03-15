import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  timeLeft: number = 0;
  interval : any;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft < 100) {
        this.timeLeft++;
      } else {
        return;
      }
    },100)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }


}
