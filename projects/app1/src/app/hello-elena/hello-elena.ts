

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-elena',
    templateUrl: './elena.component.html',
    styleUrls: ['./elena.component.scss']
})
export class ElenaComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { 
        console.log('Hola Elena')
    }
}