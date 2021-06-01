import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'iny-login1',
	templateUrl: './login1.component.html',
	styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {
	isLogin!: boolean;
	constructor(public auth: AuthService) { 
		
	}

	ngOnInit(): void {
		this.isLogin = this.auth.isLogin();
	}

}
