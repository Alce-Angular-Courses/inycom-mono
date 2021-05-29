import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'crl-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
	@Input() autor!: string;
	@Input() email!: string;
	hoy!: Date;
	constructor() {//
	}

	ngOnInit(): void {
		this.hoy = new Date();
	}

}
