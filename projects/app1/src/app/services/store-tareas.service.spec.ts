import { TestBed } from '@angular/core/testing';
import { StoreTareasService } from './store-tareas.service';

fdescribe('StoreTareasService', () => {
	let service: StoreTareasService;
	const store = 'Tareas';

	beforeEach(() => {
		TestBed.configureTestingModule({
		});
		service = TestBed.inject(StoreTareasService);
		// service = new StoreTareasService();
	});

	afterEach( () => {
		localStorage.removeItem(store);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return empty array if locaStorage is empty', () => {
		localStorage.removeItem(store);
		expect(service.getTareas()).toBeInstanceOf(Array);
		expect(service.getTareas().length).toBe(0);
	});

	it('should return array if locaStorage have data', () => {
		localStorage.setItem(store, JSON.stringify([{nombre: 'Tarea 1'}]));
		expect(service.getTareas()).toBeInstanceOf(Array);
		expect(service.getTareas().length).toBe(1);
	});

	it('should store an array ', () => {
		service.setTareas([{nombre: 'Tarea 1', responsable:'', isCompleted: false}]);
		expect(service.getTareas()).toBeInstanceOf(Array);
		expect(service.getTareas().length).toBe(1);
	});
});
