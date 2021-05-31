import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './autores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';


@NgModule({
	declarations: [
		AutoresComponent,
  ListaComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		AutoresRoutingModule
	]
})
export class AutoresModule { }
