import { NgModule } from '@angular/core';
import MATERIAL_MODULES from './material.barrels';
import { MenuNavComponent } from './components/menu-nav.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ...MATERIAL_MODULES,
    RouterModule,
    CommonModule
  ],
  exports: [
    ...MATERIAL_MODULES,
    /// custom component...
    MenuNavComponent
  ],
  declarations: [
    // custom components
    MenuNavComponent
  ],
  providers: [
    // services (eg: sidebarService....)
  ],
})
export class UIModule { }

