import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso, Turno } from '../../models/alumno';
import { CURSOS, TURNOS } from '../../models/cursos.data';


@Component({
	selector: 'iny-md-form',
	templateUrl: './md-form.component.html',
	styleUrls: ['./md-form.component.scss']
})
export class MdFormComponent implements OnInit {
	cursos!: Array<Curso>;
	turnos!: Array<Turno>;
	fgAlumno!: FormGroup
	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.cursos = CURSOS;
		this.turnos = TURNOS;
		this.fgAlumno = this.fb.group({
			nombre: ['', [Validators.required, Validators.minLength(3)],],
			apellidos: [''],
			dni: [''],
			email: [''],
			nacim: [''],
			coment: [''],
			isOk: [false],
			turno: [null],
			curso: [null]
		});
		console.log(this.fgAlumno);
	}

	onSubmit(): void {
		console.log('Enviando', this.fgAlumno.value);
	}

}
