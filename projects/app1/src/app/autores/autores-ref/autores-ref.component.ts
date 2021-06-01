import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'iny-autores-ref',
	templateUrl: './autores-ref.component.html',
	styleUrls: ['./autores-ref.component.scss']
})
export class AutoresRefComponent implements OnInit {
	autores!: Array<string>;
	autores$!: BehaviorSubject<Array<string>>
	@ViewChild('refAutor') elAutor!: ElementRef 
	constructor() {
		//
	}

	ngOnInit(): void {
		this.autores = [
			'William Gibson',
			'Bruce Sterling'
		];
		this.autores$ = new BehaviorSubject(this.autores);
	}

	ngAfterViewInit(): void {
		// this.autores = [...this.autores, 'Isaac Asimov'];
	}
		

	addAutor(autor: string): void {
		this.autores.push(autor);
		this.elAutor.nativeElement.value = '';
	}

	addAutorClon(autor: string): void {
		// this.autores.push(this.fcAutor.value)
		this.autores = [...this.autores, autor];
		this.elAutor.nativeElement.value = '';
	}

	addAutorRx(autor: string): void {
		this.autores.push(autor);
		this.autores$.next(this.autores);
	}

}
