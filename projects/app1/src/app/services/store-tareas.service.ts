import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
	providedIn: 'root'
})
export class StoreTareasService {
	store: string
	store$: Subject<Array<Tarea>>
	constructor() {
		this.store = 'Tareas';
		this.store$ = new Subject();
	}

	getTareas(): Array<Tarea> {
		return localStorage.getItem(this.store) ?
			JSON.parse(<string>localStorage.getItem(this.store)) : [];
	}

	setTareas(tareas: Array<Tarea>): void {
		localStorage.setItem(this.store, JSON.stringify(tareas));
		console.log(tareas);
		this.store$.next(tareas);
	}

}
