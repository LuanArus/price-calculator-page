import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TourPrimeNgModule, TourService } from 'ngx-ui-tour-primeng';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AppButtonModule } from './components/button/button.module';
import { ButtonType } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { AppBlockUiModule } from './components/blockui/blockui.module';
import { MainService } from '@controller/main.service';
import { DynamicObject } from './models/interfaces/_dynamicobject';
import { AppDynamicDrawerModule } from './components/dynamicdrawer/dynamicdrawer.module';
import { filter, take } from 'rxjs/operators';

@Component({
	standalone: true,
	imports: [
		AppBlockUiModule,
		AppButtonModule,
		AppDynamicDrawerModule,
		CommonModule,
		ConfirmDialogModule,
		RouterOutlet,
		TourPrimeNgModule,
	],
	selector: 'app-root',
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [],
	templateUrl: './app.component.html'
})

export class AppComponent {

	public blockUI: boolean = false;
	public dynamicObjects?: DynamicObject[];

	@ViewChild('container', { read: ViewContainerRef })
	container!: ViewContainerRef;

	get ButtonType() {
		return ButtonType;
	}

	constructor(protected tourService: TourService,
		protected mainService: MainService,
		private router: Router) {

		this.router.events
			.pipe(
				filter(event => event instanceof NavigationEnd),
				take(1)
			)
			.subscribe(() => {
				this.mainService.loading.next(false);
			});

		this.mainService.loading?.asObservable()?.subscribe((loading: boolean) => {
			this.blockUI = loading;
		});

		this.mainService.dynamicObjects?.asObservable()?.subscribe((objects: DynamicObject[]) => {
			this.dynamicObjects = objects;
		});
	}

	ngOnInit() { }

}
