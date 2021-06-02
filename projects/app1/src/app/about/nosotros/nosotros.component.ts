import { ChangeDetectionStrategy, Component, Injector, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


interface ImagenPicsum {
	titulo: string;
	texto: string;
	imagen: string;
}

@Component({
	selector: 'iny-nosotros',
	templateUrl: './nosotros.component.html',
	styleUrls: ['./nosotros.component.scss'],
})
export class NosotrosComponent implements OnInit {
	@Input() isModal: boolean | undefined;
	@Input() name!: string
	imagenes!: Array<ImagenPicsum>;
	activeModal!: NgbActiveModal
	constructor(
		private injector: Injector
		// public activeModal: NgbActiveModal
	) {
		this.isModal = false;
	}

	ngOnInit(): void {
		if (this.isModal) {
			this.activeModal = <NgbActiveModal>this.injector.get(NgbActiveModal);
		}

		this.imagenes = [944, 1011, 984].map((n) => {
			return {
				titulo: 'Imagen ' + n,
				texto: 'Texto un poco más largo ' + n,
				imagen: `https://picsum.photos/id/${n}/900/500`
			};
		}
		);
	}

	closeModal() {
		this.activeModal.dismiss('Cross click')
	}


}
