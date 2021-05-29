import { Component, OnInit } from '@angular/core';
import { MenuItems } from 'corelib1';

@Component({
	selector: 'iny-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
	title!: string ;
	subtitle!: string 
	logo!: string
	autor!: string
	email!: string 
	menuItems!: Array<MenuItems>
	constructor() {
		//
	}

	ngOnInit (): void {
		this.title = 'Curso de Angular Avanzado';
		this.subtitle = 'Inycom (Desaprendiendo) - Mayo 2021';
		this.logo = 'assets/logo.svg';  
		this.autor = 'Alejandro Cerezo';
		this.email = 'alce65@hotmail.es';
		this.menuItems = [
			{name: 'Home', path: 'home'},
			{name: 'Tareas', path: 'tareas'},
			{name: 'Cursos', path: 'cursos'},
			{name: 'Libros', path: 'libros'},
			{name: 'Autores', path: 'autores'},
			{name: 'About', path: 'about'}
		];
	}
}
