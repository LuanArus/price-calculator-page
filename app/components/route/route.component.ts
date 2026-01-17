import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MainService } from '@controller/main.service';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Component({
	selector: 'app-route',
	templateUrl: './route.component.html',
	standalone: false,
})

export class RouteComponent {
	
	public menuItems?: MenuItem[];

	constructor(private router: Router,
		private activatedRoute: ActivatedRoute,
		public mainService: MainService) {
		this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
			.subscribe(() => {
				this.menuItems = [];
				this.createBreadcrumbs(this.activatedRoute);
			});
	}

	private createBreadcrumbs(route: ActivatedRoute): void {
		for (const child of route?.children) {
			const splitedBreadcrumb: string[] = child?.snapshot?.data?.['breadcrumb']?.split([',']);

			if (splitedBreadcrumb) {
				for (const item of splitedBreadcrumb) {
					this.menuItems?.push({ label: item });
				}
			}

			if (child?.children) {
				this.createBreadcrumbs(child?.children[0]);
			}
		}
	}
}
