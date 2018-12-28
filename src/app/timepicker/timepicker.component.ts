import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/src/render3';
import { timeout } from 'q';

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

  incrementMinutes() {
    this.time.minutes++;
  }

  decrementMinutes() {
    this.time.minutes--;
  }

  getTimeString(): string {
    return this.time.hour + ':' + this.time.minutes + ':' + this.time.seconds;
  }
}
