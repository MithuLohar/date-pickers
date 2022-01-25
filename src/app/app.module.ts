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

// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'DD-MM-YYYY',
//   },
//   display: {
//     dateInput: 'DD MMM, YYYY',
//     monthYearLabel: 'MMMMYYYY',
//     dateA11yLabel: 'L',
//     monthYearA11yLabel: 'MMMM YYYY',
//   },
// };

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
  ],
  providers: [
    // {
    //   provide: NgxMatDateAdapter,
    //   useClass: DateformateService,
    //   deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY],
    // },
    {
      provide: NGX_MAT_DATE_FORMATS,
      useValue: CUSTOM_DATE_FORMATS,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
