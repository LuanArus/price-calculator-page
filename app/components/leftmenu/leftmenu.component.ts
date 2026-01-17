import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

export interface LeftMenuItem extends MenuItem {
	level?: string;
	notification?: boolean;
	commingSoon?: boolean;
	new?: boolean;
	items?: LeftMenuItem[],
}

@Component({
	selector: 'app-left-menu',
	templateUrl: './leftmenu.component.html',
	standalone: false,
})

export class LeftMenuComponent {

	@Input() public items?: LeftMenuItem[];

	constructor() { }

	public ngOnInit(): void { }

}
