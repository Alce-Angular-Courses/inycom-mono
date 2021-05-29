import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeTestComponent } from './home-test/home-test.component';
import { Corelib1Module } from 'corelib1';


@NgModule({
	declarations: [
		HomeTestComponent
	],
	imports: [
		CommonModule,
		Corelib1Module,
		HomeRoutingModule
	]
})
export class HomeModule { }
