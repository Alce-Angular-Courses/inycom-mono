import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'crl-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	@Input() title!: string;
	@Input() subtitle!: string;
	@Input() logo!: string;
	@Input() menuItems: Array<string>;
	constructor() { 
		// this.titulo ='';
		this.menuItems = [];
	}

	ngOnInit(): void {
		// TODO
	}

}
