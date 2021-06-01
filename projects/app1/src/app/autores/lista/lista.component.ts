import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'iny-lista',
	templateUrl: './lista.component.html',
	styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
	@Input() lista: Array<string>
	constructor() {
		this.lista = [];
	}

	ngOnInit(): void {
		//
	}

	runChangeDetection(): void {
		console.log('Change Detection en lista');
	}

}
