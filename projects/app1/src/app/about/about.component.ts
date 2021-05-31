import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NosotrosComponent } from './nosotros/nosotros.component';

@Component({
	selector: 'iny-about',
	template: `
    <p>
      about works!
    </p>
	<button type="button" class="btn btn-primary" (click)="goNosotros()"> 
      Nosotros
    </button>
    <button type="button" class="btn btn-primary" (click)="goNosotrosModal()"> 
      Nosotros Modal
    </button>
  `,
	styles: [
	]
})
export class AboutComponent implements OnInit {

	constructor(
		private modalService: NgbModal,
		private router: Router
		) { 
		//
	}

	ngOnInit(): void {
		//
	}

	goNosotros(): void {
		this.router.navigate(['about', 'nosotros'])
	}
	
	goNosotrosModal(): void {
		const modalRef = this.modalService.open(NosotrosComponent);
		modalRef.componentInstance.isModal = true;
		modalRef.componentInstance.name = 'Pepe';
	}

}
