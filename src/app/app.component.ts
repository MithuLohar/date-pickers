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
import { DatePickerComponent, IDatePickerConfig } from 'ng2-date-picker';
import { FormBuilder } from '@angular/forms';
import { DatePickerOptions } from '@tchitos/datetime-picker';

const moment = _moment;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  formGroup: any;
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      date: [new Date()],
    });
  }
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

  dateTimeExample = new Date();
  disabled = false;
  showSpinners = true;
  showSeconds = true;
  disableMinute = false;

  selectedDate = new Date();
  step = 1;
  today = new Date();
  datePickerConfig: IDatePickerConfig = {
    format: 'HH:mm',
    showTwentyFourHours: true,
    minutesInterval: 15,
  };
  options: DatePickerOptions = {
    format: 'dd/MM/yyyy',
    enableHour: true,
  };
  ngOnInit(): void {
    console.log(this.date);
    let temp = moment().format('LL');
    console.log(temp);
  }
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
