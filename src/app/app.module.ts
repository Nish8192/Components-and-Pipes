import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { DatesComponent } from './dates/dates.component';
import { TimeComponent } from './time/time.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { CustomPipesPipe } from './custom-pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    DatesComponent,
    TimeComponent,
    DatetimeComponent,
    CustomPipesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
