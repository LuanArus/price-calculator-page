import { Component, Input } from '@angular/core';
import { LeftMenuItem } from '../leftmenu.component';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-left-sub-menu',
	templateUrl: './leftsubmenu.component.html',
	standalone: false,
})

export class LeftSubMenuComponent {

	@Input() public items?: LeftMenuItem[];

	constructor(protected router: Router) { }

	public ngOnInit(): void {
		this.onExpandItemInit(this.items);
	}

	public onExpandItem(item: LeftMenuItem, level?: string): void {
		item.expanded = !item.expanded;

		if (level) {
			const iconToggler: Element = document?.getElementsByClassName(`toggler-${level}`)[0];

			iconToggler?.classList?.remove('active-menuitem');

			if ((item?.items?.length ?? 0) > 0 && item?.expanded) {
				iconToggler?.classList?.add('active-menuitem');
			}
		}
	}

	private onExpandItemInit(items?: LeftMenuItem[] | MenuItem[]): boolean {
		let parentExpanded: boolean = false;
		
		for (const item of items ?? []) {
			if (item?.routerLink == this.router?.url) {
				parentExpanded = true;
			} else if ((item?.items?.length ?? 0) > 0) {
				parentExpanded = this.onExpandItemInit(item?.items);
			}

			if (parentExpanded) {
				item.expanded = !item.expanded;
			}
		}

		return parentExpanded;
	}
}
