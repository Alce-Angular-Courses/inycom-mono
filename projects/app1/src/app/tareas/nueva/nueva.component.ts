import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
	selector: 'iny-nueva',
	templateUrl: './nueva.component.html',
	styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit {
	tarea!: Tarea
	@Output() addTarea: EventEmitter<Tarea>
	constructor() {
		this.addTarea = new EventEmitter();
	}

	ngOnInit(): void {
		this.tarea = new Tarea();
	}

	onClickSendGuardar(): void {
		if (!this.tarea.nombre) {
			return;
		}
		this.addTarea.next(this.tarea);
		this.tarea = new Tarea();

	}
}
