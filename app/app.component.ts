import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
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
import { DrawerModule } from 'primeng/drawer';

@Component({
	standalone: true,
	imports: [
		AppBlockUiModule,
		AppButtonModule,
		AppDynamicDrawerModule,
		CommonModule,
		ConfirmDialogModule,
		DrawerModule,
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
	public deferredPrompt: any = null;
	public showInstallDrawer: boolean = false;
	public isIOS: boolean = false;
	public isInStandaloneMode: boolean = false;

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

		this.checkPhone();
	}

	ngOnInit() { }

	public checkPhone(): void {
		this.isIOS = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
		this.isInStandaloneMode = ('standalone' in window.navigator && (window.navigator as any).standalone) || window.matchMedia('(display-mode: standalone)').matches;
	}

	@HostListener('window:beforeinstallprompt', ['$event'])
	public onBeforeInstallPrompt(e: Event): void {
		e.preventDefault();
		this.deferredPrompt = e;

		setTimeout(() => {
			if (this.mainService.isMobile()) {
				this.showInstallDrawer = true;
			}
		}, 250);
	}

	public onInstallApp(): void {
		if (!this.deferredPrompt) return;

		this.deferredPrompt.prompt();

		this.deferredPrompt = null;
		this.showInstallDrawer = false;
	}

	public onShowHideInstallDrawer(): void {
		this.showInstallDrawer = false;
	}

}
