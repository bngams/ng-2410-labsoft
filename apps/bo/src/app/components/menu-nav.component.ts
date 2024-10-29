import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../models/menu-nav';

@Component({
  selector: 'app-menu-nav',
  styles: `
    ul.horizontal {
      list-style-type: none;
      display: flex;
      gap: 2;
    }
  `,
  template: `
    <nav *ngIf="menu">
      <ul [ngClass]="{'horizontal': menu.type == 'nav'}">
        <li *ngFor="let item of menu.items">
          <!-- [routerLinkActive]="'active' vs routerLinkActive="active" -->
          <a [routerLink]="[item.path]" [routerLinkActive]="'active'">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </nav>
  `
})


export class MenuNavComponent implements OnInit {
  @Input()
  menu!: Menu;

  constructor() { }

  ngOnInit() { }
}
