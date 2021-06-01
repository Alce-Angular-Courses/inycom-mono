import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'iny-autores',
	templateUrl: './autores.component.html',
	styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
	fcAutor!: FormControl
	autores!: Array<string>;
	constructor() {
		//
	}

	ngOnInit(): void {
		this.fcAutor = new FormControl();
		this.autores = [
			'William Gibson',
			'Bruce Sterling'
		]
	}

	addAutor(): void {
		this.autores.push(this.fcAutor.value);
		this.fcAutor.reset();
	}

	addAutorClon(): void {
		// this.autores.push(this.fcAutor.value)
		this.autores = [...this.autores, this.fcAutor.value];
		this.fcAutor.reset();
	}

}
