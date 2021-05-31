import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{
		path: 'home', 
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{ 
		path: 'tareas', 
		loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasModule) 
	},
	{
		path: 'cursos', 
		loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
	},
	{
		path: 'libros', 
		loadChildren: () => import('./libros/libros.module').then(m => m.LibrosModule)
	},
	{
		path: 'autores', 
		loadChildren: () => import('./autores/autores.module').then(m => m.AutoresModule)
	},
	{
		path: 'about', 
		loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
	},
	// { path: '**', component: PathNotFoundComponent }
	{ path: '**', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
