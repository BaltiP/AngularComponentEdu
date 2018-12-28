import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterpolationExComponent } from './interpolation-ex/interpolation-ex.component';
import { appRouting } from './app-routing';
import { TimepickerComponent } from './timepicker/timepicker.component';

@NgModule({
  declarations: [AppComponent, InterpolationExComponent, TimepickerComponent],
  imports: [BrowserModule, appRouting],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
