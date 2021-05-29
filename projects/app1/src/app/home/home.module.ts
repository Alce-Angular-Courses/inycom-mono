import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule } from '@angular/forms';
import { SaludoRefComponent } from './saludo-ref/saludo-ref.component';


@NgModule({
	declarations: [
		HomeComponent,
		SaludoComponent,
		SaludoRefComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		HomeRoutingModule
	],
	exports: [
		HomeComponent
	]
})
export class HomeModule { }
