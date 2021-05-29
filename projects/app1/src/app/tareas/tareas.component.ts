import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'iny-tareas',
	template: `
    <div class="container">
      <div class="row">
        <iny-lista-simple class="col-6"></iny-lista-simple>
        <iny-lista class="col-6"></iny-lista>  
      </div>
    </div>
  `,
	styles: [
	]
})
export class TareasComponent implements OnInit {

	constructor() {
		//
	}

	ngOnInit(): void {
		//
	}

}
