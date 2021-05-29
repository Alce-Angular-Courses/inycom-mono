import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Curso, Turno, Alumno } from '../../models/alumno';
import { CURSOS, TURNOS } from '../../models/cursos.data';

@Component({
	selector: 'iny-td-form',
	templateUrl: './td-form.component.html',
	styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {
	cursos!: Array<Curso>;
	turnos!: Array<Turno>;
	@ViewChild('formRef', { static: true }) alumnoForm!: ElementRef
	@ViewChild('ngFormRef', { static: true }) alumnoNgForm!: NgForm
	constructor() {
		//
	}

	ngOnInit(): void {
		this.cursos = CURSOS;
		this.turnos = TURNOS;
		console.log(this.alumnoForm);
		console.log(this.alumnoNgForm);
	}

	onSubmit(data: Alumno): void {
		console.log('Enviando', data);
	}
}
