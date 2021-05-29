import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { TdFormComponent } from './td-form/td-form.component';
import { MdFormComponent } from './md-form/md-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		CursosComponent,
		TdFormComponent,
		MdFormComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		CursosRoutingModule
	]
})
export class CursosModule { }
