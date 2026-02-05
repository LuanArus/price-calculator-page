import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MainService } from '@controller/main.service';
import { PatternComponent } from '@view/pattern/pattern.component';
import { LeftMenuItem } from 'src/app/components/leftmenu/leftmenu.component';
import { Dialog } from 'primeng/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	standalone: false,
})

export class MainComponent extends PatternComponent {

	public menuItems: LeftMenuItem[] = [];
	public fullScreen: boolean = false;
	public imagesFullScreen: any[] = [];
	public imagePopup?: any;
	// public menuVisible: boolean = true;

	// @ViewChild('leftMenu', { static: true }) leftMenu!: ElementRef;
	@ViewChild('dialogRequestLog') public dialogRequestLog?: Dialog;

	constructor(public override mainService: MainService,
		protected router: Router,
		protected activatedRoute: ActivatedRoute) {
		super(mainService);

		this.mainService.menuItemsReload?.subscribe((menuItemReload: any) => {
			if (menuItemReload?.reload) {
				this.createMenuItems();
			}
		});

		this.mainService.imagesFullScreen?.subscribe((images: any) => {
			this.imagesFullScreen = images;
		});

		this.mainService.fullScreen?.subscribe((fullScreen: boolean) => {
			this.fullScreen = fullScreen;
		});

		this.mainService.imagePopup?.subscribe((imagePopup: any) => {
			this.imagePopup = imagePopup;
		});

		this.createMenuItems();

		if (this.activatedRoute?.snapshot?.queryParamMap?.get('checkRoute')) {
			this.goToFirstAllowedRoute();
		}

		// this.mainService?.menu?.subscribe((value: boolean) => {
		// 	this.menuVisible = value;
		// })
	}

	protected override canRegisterClose(): void { }

	private createMenuItems(): void {
		this.menuItems = [
			{
				label: 'Dashboard',
				visible: true,
				items: [
					{
						label: 'Dashboard',
						icon: 'fas fa-home',
						routerLink: ['/dashboard'],
						items: [],
						visible: true,
						badge: '',
						tooltip: 'Dashboard',
						level: '1',
						notification: false,
						commingSoon: false,
						new: false,
					},
				],
			},
			{
				label: 'Calculadora',
				visible: true,
				items: [
					{
						label: 'Ind. e Comércio',
						icon: 'fas fa-industry',
						routerLink: ['/industry'],
						items: [],
						visible: true,
						badge: '',
						tooltip: 'Ind. e Comércio',
						level: '1',
						notification: false,
						commingSoon: false,
						new: false,
					},
					{
						label: 'Serviços',
						icon: 'fas fa-bell-concierge',
						routerLink: ['/services'],
						items: [],
						visible: true,
						badge: '',
						tooltip: 'Serviços',
						level: '1',
						notification: false,
						commingSoon: false,
						new: false,
					},
				],
			},
		];
	}

	public getScrollHeightRequestLog(): number {
		return this.mainService?.isMobile() ? 220 : 356;
	}

	private goToFirstAllowedRoute(): void {
		let firstAllowedRoute: LeftMenuItem | undefined = undefined;

		for (const menuItem of this.menuItems ?? []) {
			for (const child of menuItem?.items ?? []) {
				if (child?.visible && !child?.commingSoon && !firstAllowedRoute) {
					firstAllowedRoute = child;
				}
			}
		}

		if (firstAllowedRoute) {
			this.router?.navigate(firstAllowedRoute?.routerLink);
		}
	}

	// @HostListener('document:click', ['$event'])
	// onClickOutsideMenu(event: MouseEvent) {
	// 	if (!this.menuVisible) return;

	// 	const clickedInside = this.leftMenu?.nativeElement?.contains(event.target);

	// 	console.log(clickedInside, this.mainService?.isMobile())

	// 	if (!clickedInside && this.mainService?.isMobile()) {
	// 		this.mainService?.menu?.next(true);
	// 	}
	// }

	public async onNew(): Promise<void> { }

	public reloadLeftMenu(): void {
		this.menuItems = [...this.menuItems!];
	}

	protected override setValidators(): void { }

	protected override setValidatorValues(): void { }
}
