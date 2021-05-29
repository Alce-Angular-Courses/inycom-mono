import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'iny-saludo',
	templateUrl: './saludo.component.html',
	styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {
	message!: string;
	userName!: string;
	constructor() {
		//
	}

	ngOnInit(): void {
		this.message = 'Dime tu nombre';
		this.userName = 'Pepe';
	}

	onClickBorrar(ev: Event): void {
		this.userName = '';
		console.log(ev);
	}

}
