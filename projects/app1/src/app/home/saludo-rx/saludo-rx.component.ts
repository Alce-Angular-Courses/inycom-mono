import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
	selector: 'iny-saludo-rx',
	templateUrl: './saludo-rx.component.html',
	styleUrls: ['./saludo-rx.component.scss']
})
export class SaludoRxComponent implements OnInit {
	fcNombre!: FormControl
	constructor(private fb: FormBuilder) {
		//
	}

	ngOnInit(): void {
		// this.fcNombre = new FormControl();
		this.fcNombre = this.fb.control('');
	}

	onBorrar(): void {
		console.log(this.fcNombre);
		this.fcNombre.reset();
	}
}
