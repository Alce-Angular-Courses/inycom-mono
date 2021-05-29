import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'iny-libros',
	template: `
    <div class="container">
      <div class="row">
        <iny-mock class="col-6"></iny-mock>
        <iny-google class="col-6"></iny-google>
        <iny-by-service class="col-6"></iny-by-service>
      </div>
    </div>
  `,
	styles: [
	]
})
export class LibrosComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
