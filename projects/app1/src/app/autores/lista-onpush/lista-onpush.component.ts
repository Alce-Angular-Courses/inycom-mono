import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'iny-lista-onpush',
	templateUrl: './lista-onpush.component.html',
	styleUrls: ['./lista-onpush.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaOnpushComponent implements OnInit {
	@Input() lista: Array<string>
	constructor() {
		this.lista = [];
	}

	ngOnInit(): void {
		//
	}

	runChangeDetection(): void {
		console.log('Change Detection en lista-onpush');
	}

	onClickActualizar(ev: Event): void {
		console.log(ev);
	}
}
