import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from '@aelion/utils';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, // => CommonModule => UppercasePipe, NgIf
    AppRoutingModule,
    ExponentialStrengthPipe, // import as a module because standalone
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
