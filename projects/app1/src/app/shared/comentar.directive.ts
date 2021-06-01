import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
	selector: '[inyComentar]'
})
export class ComentarDirective implements OnInit{
	coment: string
	@Input() inyComentar!: string;
	constructor(
		private elem: ElementRef,
		private renderer: Renderer2
	) { 
		console.log('Directiva en uso', elem);
		this.coment = 'Marcado como importante';
		
	}
	ngOnInit(): void {
		this.coment = this.inyComentar ? this.inyComentar : this.coment;
		// elem.nativeElement.title = this.coment;
		this.renderer.setAttribute(this.elem.nativeElement,'title', this.coment );
	}

	@HostListener('click') onClick(): void {
		this.coment = 'Revisado';
		this.renderer.setAttribute(this.elem.nativeElement,'title', this.coment );
	}

}
