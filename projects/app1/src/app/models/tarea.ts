export interface iTarea {
    nombre: string;
    responsable: string;
    isCompleted: boolean;
}

export class Tarea implements iTarea {
	//nombre: string
	constructor(
        public nombre: string = '',
        public responsable: string = '',
        public isCompleted: boolean = false
	) {
		// this.nombre = nombre
	}
}


