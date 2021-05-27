

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-manuel',
    templateUrl: './manuel.component.html',
    styleUrls: ['./manuel.component.scss']
})
export class ManuelComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { 
        console.log('Hola Manuel')
    }
}