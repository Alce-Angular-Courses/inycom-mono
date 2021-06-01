import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'iny-lista-rx',
	templateUrl: './lista-rx.component.html',
	styleUrls: ['./lista-rx.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaRxComponent implements OnInit {
	@Input('lista') lista$!: Observable<Array<string>>;
	lista: Array<string>
	constructor() {
		this.lista = [];
		
	}

	ngOnInit(): void {
		this.lista$.subscribe( (resultado) => {
			this.lista = resultado;
		});
	}

	runChangeDetection(): void {
		console.log('Change Detection en lista-rx');
	}

}
