import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		MenuComponent,
	],
	imports: [
		CommonModule
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		MenuComponent,
	]
})
export class LayoutModule { }
