import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	storeName: string;
	constructor() {
		this.storeName = 'Token';
	}

	isLogin(): boolean {
		const token = localStorage.getItem(this.storeName);
		return Boolean(token);
	}
}
