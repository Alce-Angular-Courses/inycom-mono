import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'iny-login2',
	templateUrl: './login2.component.html',
	styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

	constructor(private auth: AuthService) {
		//
	}

	ngOnInit(): void {
		//
	}

	isLogin(): boolean {
		return this.auth.isLogin();
	}

}
