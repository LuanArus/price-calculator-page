import { Component, Input, OnInit } from '@angular/core';
import { DynamicObject } from 'src/app/models/interfaces/_dynamicobject';

@Component({
	selector: 'app-dynamic-drawer',
	templateUrl: './dynamicdrawer.component.html',
	standalone: false,
})

export class DynamicDrawerComponent implements OnInit {

	@Input() public objects?: DynamicObject[];

	constructor() { }

	public ngOnInit(): void { }

}
