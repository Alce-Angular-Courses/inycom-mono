import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'iny-saludo-ref',
	templateUrl: './saludo-ref.component.html',
	styleUrls: ['./saludo-ref.component.scss']
})
export class SaludoRefComponent implements OnInit {
	@ViewChild('nameRef', { static: true }) userName!: ElementRef
	constructor() {
		console.log(this.userName);
	}

	ngOnInit(): void {
		console.log(this.userName);
	}

}
