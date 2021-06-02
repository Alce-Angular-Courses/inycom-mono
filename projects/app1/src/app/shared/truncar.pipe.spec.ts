import { TruncarPipe } from './truncar.pipe';

describe('TruncarPipe', () => {
	let pipe: TruncarPipe;
	beforeEach(()=> {
		pipe = new TruncarPipe();
	});

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should be iqual with a short text...', () => {
		expect(pipe.transform('Texto', 10)).toBe('Texto');
	});

	it('should be shorter with a long text...', () => {
		const texto = 'Esto es un testo largo';
		expect(pipe.transform(texto, 10).length).toBeLessThan(texto.length);
		expect(pipe.transform(texto, 10)).toContain('...');
	});
});
