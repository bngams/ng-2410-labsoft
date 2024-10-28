import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from '../../../fo/src/app/pipes/exponential-strength.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // => CommonModule => UppercasePipe, NgIf
    AppRoutingModule,
    ExponentialStrengthPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
