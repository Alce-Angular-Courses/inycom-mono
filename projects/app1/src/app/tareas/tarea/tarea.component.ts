import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
	selector: 'iny-tarea',
	templateUrl: './tarea.component.html',
	styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
	@Input() tarea!: Tarea
	@Input() indice!: number
	@Output() changeTarea: EventEmitter<number>
	@Output() deleteTarea: EventEmitter<number>
	constructor() {
		this.changeTarea = new EventEmitter();
		this.deleteTarea = new EventEmitter();
	}

	ngOnInit(): void {
		// clonamos por desestructuracion
		// this.tarea = {...this.tarea}
		// clonamos con JSON
		this.tarea = JSON.parse(JSON.stringify(this.tarea));
	}

	onChangeCompletedSend(): void {
		console.log('Cambiar', this.indice);
		this.changeTarea.emit(this.indice);
	}

	onClickBorrarSend(): void {
		this.deleteTarea.emit(this.indice);
	}

}
