import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { StoreTareasService } from '../../services/store-tareas.service';

@Component({
	selector: 'iny-lista',
	templateUrl: './lista.component.html',
	styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
	tareas!: Array<Tarea>
	//  private store: string

	constructor(private st: StoreTareasService) { }

	ngOnInit(): void {
		// this.store = 'Tareas'
		this.st.store$.subscribe(
			(data: Array<Tarea>) => this.tareas = data
		);

		this.tareas = this.st.getTareas();
		/* localStorage.getItem(this.store) ? 
	  JSON.parse(localStorage.getItem(this.store)) : [] */

	}

	onAddTarea(tarea: Tarea): void {
		if (!tarea.nombre) {
			return;
		}
		this.tareas.push(tarea);
		this.save();

	}

	onChangeTarea(i: number): void {
		console.log('Respuesta a ', i);
		this.tareas[i].isCompleted = !this.tareas[i].isCompleted;
		this.save();
	}


	onDeleteTarea(i: number): void {
		this.tareas.splice(i, 1);
		this.save();

	}

	private save() {
		this.st.setTareas(this.tareas);

		// localStorage.setItem(this.store, JSON.stringify(this.tareas))
		// console.log(this.tareas)
	}
}
