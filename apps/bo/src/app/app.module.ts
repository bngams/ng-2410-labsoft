import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from '@aelion/utils';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // => CommonModule => UppercasePipe, NgIf
    AppRoutingModule,
    ExponentialStrengthPipe // import as a module because standalone
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
