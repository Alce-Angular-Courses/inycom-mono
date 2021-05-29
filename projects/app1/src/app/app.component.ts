import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'iny-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
	title!: string;
	subtitle!: string;
	constructor() {
		//
	}

	ngOnInit (): void {
		this.title = 'Curso de Angular Avanzado';
		this.subtitle = 'Inycom (Desaprendiendo) - Mayo 2021';
	}
}
