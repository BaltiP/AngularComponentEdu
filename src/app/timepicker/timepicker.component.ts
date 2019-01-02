import { Component } from '@angular/core';

class Time {
  hour = 0;
  minutes = 0;
  seconds = 0;
}

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent {
  time = new Time();

  hourValid = true;
  minutesValid = true;

  validateHour() {
    console.log('validateHour!');
    if (this.time.hour < 0 || this.time.hour > 24) {
      this.hourValid = false;
    } else {
      this.hourValid = true;
    }
  }

  incrementMinutes() {
    if (this.time.minutes < 60) {
      this.time.minutes++;
    }
  }

  decrementMinutes() {
    if (this.time.minutes > 0) {
      this.time.minutes--;
    }
  }

  getTimeString(): string {
    return this.time.hour + ':' + this.time.minutes + ':' + this.time.seconds;
  }
}
