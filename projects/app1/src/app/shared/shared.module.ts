import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { ComentarDirective } from './comentar.directive';



@NgModule({
	declarations: [
		Login1Component,
		Login2Component,
		ComentarDirective
	],
	imports: [
		CommonModule
	],
	exports: [
		Login1Component,
		Login2Component,
		ComentarDirective
	]
})
export class SharedModule { }
