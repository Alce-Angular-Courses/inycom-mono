import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'iny-cursos',
	template: `
    <div class="container">
      <div class="row">
        <iny-td-form class="col-6"></iny-td-form>
        <iny-md-form class="col-6"></iny-md-form>
      </div>
    </div>
  `,
	styles: [
	]
})
export class CursosComponent implements OnInit {

	constructor() {
		//
	}

	ngOnInit(): void {
		//
	}

}
