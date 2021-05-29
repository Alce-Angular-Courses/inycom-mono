import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'crl-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@Input() title!: string;
	@Input() subtitle!: string;
	@Input() logo!: string;
	constructor() { 
		this.title = 'Default title';
		this.subtitle = 'Default subtitle';
	}

	ngOnInit(): void {
		// TODO
	}

}
