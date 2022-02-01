import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgxMatTimepickerModule,
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatDateFormats,
  NGX_MAT_DATE_FORMATS,
  NgxMatDateAdapter,
} from '@angular-material-components/datetime-picker';
import {
  NgxMatMomentModule,
  NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY,
} from '@angular-material-components/moment-adapter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import { MatIconModule } from '@angular/material/icon';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DateTimePickerModule } from 'ngx-datetime-picker';
import {
  DlDateTimeDateModule,
  DlDateTimePickerModule,
} from 'angular-bootstrap-datetimepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateformateService } from './dateformate.service';
import { DpDatePickerModule } from 'ng2-date-picker';
import { DatetimePickerModule } from '@tchitos/datetime-picker';
import {
  MatDatetimepickerModule,
  MatNativeDatetimeModule,
  MAT_DATETIME_FORMATS,
} from '@mat-datetimepicker/core';

const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: 'DD-MM-YYYY HH:mm:ss',
  },
  display: {
    dateInput: 'DD-MM-YYYY HH:mm:ss',
    monthYearLabel: 'DD-MM-YYYY',
    dateA11yLabel: 'l',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD MMM, YYYY',
    monthYearLabel: 'MMMMYYYY',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

const MAT_DATETIMEPICKER_FORMAT = {
  parse: {},
  display: {
    dateInput: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    },
    monthInput: {
      month: 'long',
    },
    datetimeInput: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    },
    timeInput: {
      hour: '2-digit',
      minute: '2-digit',
    },
    monthYearLabel: {
      year: 'numeric',
      month: 'short',
    },
    dateA11yLabel: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    monthYearA11yLabel: {
      year: 'numeric',
      month: 'long',
    },
    popupHeaderDateLabel: {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
    },
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatetimepickerModule,
    MatNativeDatetimeModule,

    FormsModule,
    ReactiveFormsModule,

    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,

    NgxMatMomentModule,

    OwlDateTimeModule,
    OwlNativeDateTimeModule,

    DateTimePickerModule,

    DlDateTimeDateModule, // <--- Determines the data type of the model
    DlDateTimePickerModule,

    DpDatePickerModule,

    DatetimePickerModule,
  ],
  providers: [
    /* {
      provide: NgxMatDateAdapter,
      useClass: DateformateService,
      deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY],
    }, */
    {
      provide: NGX_MAT_DATE_FORMATS,
      useValue: CUSTOM_DATE_FORMATS,
    },
    {
      provide: MAT_DATETIME_FORMATS,
      useValue: MAT_DATETIMEPICKER_FORMAT,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
