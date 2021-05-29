import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Auxlib1Module } from 'auxlib1';

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		Auxlib1Module,
		HomeRoutingModule,
	], 
	exports: [
		HomeComponent
	]
})
export class HomeModule { }
