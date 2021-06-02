import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'truncar'
})
export class TruncarPipe implements PipeTransform {

	transform(value: string, lon: number): string {
		lon = lon ? lon : value.length;
		if (value.length <= lon) {
			return value;
		}
		return value.slice(0,lon) + '...';
	}

}
