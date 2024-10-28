import { NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExponentialStrengthPipe } from "./pipes/exponential-strength.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe, NgIf, ExponentialStrengthPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fo';
}
