import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-blockui',
	templateUrl: './blockui.component.html',
	standalone: false,
})

export class BlockUiComponent {

	@Input() public message?: string;
	@Input() public target?: any;
	@Input() public blocked?: boolean;

	constructor() { }

	public ngOnInit(): void { }

}
