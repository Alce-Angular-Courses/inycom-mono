import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'iny-home',
	template: `
  <div class="container">
    <div class="row">
		<iny-saludo class="col-6"></iny-saludo>
		<iny-saludo-ref class="col-6"></iny-saludo-ref>
		<iny-saludo-rx class="col-6"></iny-saludo-rx>
    </div>
  </div>
  `,
	styles: [
	]
})
export class HomeComponent implements OnInit {

	constructor() {
		//
	}

	ngOnInit(): void {
		//
	}

}
