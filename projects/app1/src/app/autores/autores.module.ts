import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './autores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { ListaOnpushComponent } from './lista-onpush/lista-onpush.component';
import { AutoresRefComponent } from './autores-ref/autores-ref.component';
import { ListaRxComponent } from './lista-rx/lista-rx.component';


@NgModule({
	declarations: [
		AutoresComponent,
  ListaComponent,
  ListaOnpushComponent,
  AutoresRefComponent,
  ListaRxComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		AutoresRoutingModule
	]
})
export class AutoresModule { }
