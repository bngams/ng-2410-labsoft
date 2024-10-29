import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
  // imports: [HeaderComponent] // if standalone
})
export class AppComponent {
  title = 'bo';
}
