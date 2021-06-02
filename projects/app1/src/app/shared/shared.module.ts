import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { ComentarDirective } from './comentar.directive';
import { TruncarPipe } from './truncar.pipe';



@NgModule({
	declarations: [
		Login1Component,
		Login2Component,
		ComentarDirective,
		TruncarPipe
	],
	imports: [
		CommonModule
	],
	exports: [
		Login1Component,
		Login2Component,
		ComentarDirective,
		TruncarPipe
	]
})
export class SharedModule { }
