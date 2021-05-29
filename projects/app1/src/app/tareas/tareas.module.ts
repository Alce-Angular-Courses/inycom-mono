import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { ListaSimpleComponent } from './lista-simple/lista-simple.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { NuevaComponent } from './nueva/nueva.component';
import { TareaComponent } from './tarea/tarea.component';

@NgModule({
	declarations: [
		TareasComponent,
		ListaSimpleComponent,
		ListaComponent,
		NuevaComponent,
		TareaComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		TareasRoutingModule
	],
	providers: []
})
export class TareasModule { }
