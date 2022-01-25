import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {
  NgxMatDatetimePicker,
  NgxMatDatetimeInput,
} from '@angular-material-components/datetime-picker';
import { Moment } from 'moment';
import * as _moment from 'moment';

import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

const moment = _moment;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(NgxMatDatetimePicker)
  picker!: NgxMatDatetimePicker<any>;
  isValidMoment: boolean = false;
  title = 'date-pickers';
  processedTime: any;
  date = moment();
  // date = new Date();
  selectedMoment = new Date();
  myDatePickerFrom = new Date();
  myDatePickerTo = new Date();
  ngOnInit(): void {
    console.log(this.date);
    let temp = moment().format('LL');
    console.log(temp);
  }

  dateTimeExample = new Date();
  disabled = false;
  showSpinners = true;
  showSeconds = true;
  disableMinute = false;
  today = '';
  selectedDate = new Date();
  step = 1;
  ngAfterViewInit() {}

  change() {}
  selDate!: string;
  selDay!: string;
  selMonth!: string;
  selYear!: string;

  addEvent(type: any, event: NgxMatDatetimeInput<Date>) {
    // let d = this.date;
    // this.processedTime = `${d.getDate().toString().padStart(2, '0')}-${(
    //   d.getMonth() + 1
    // )
    //   .toString()
    //   .padStart(2, '0')}-${d.getFullYear()}`;
    // console.log(this.processedTime);
    console.log(this.date.toString());
  }
}
