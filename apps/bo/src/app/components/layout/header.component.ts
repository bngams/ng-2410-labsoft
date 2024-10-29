import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  styles: `
    .example-spacer {
      flex: 1 1 auto;
    }
  `,
  template: `
  <header>
    <mat-toolbar>
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
        <mat-icon>menu</mat-icon>
      </button>
      <span>My App</span>
      <span class="example-spacer"></span>
      <app-menu-nav [menu]="menuNav"></app-menu-nav>
      <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
        <mat-icon>share</mat-icon>
      </button>
    </mat-toolbar>
  <header>
  `
})

export class HeaderComponent implements OnInit {
  menuNav = { type: 'nav', items: [ { title: 'Home', path: '/home'} ] };

  constructor() { }

  ngOnInit() { }
}
