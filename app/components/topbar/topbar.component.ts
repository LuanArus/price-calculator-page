import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MainService } from '@controller/main.service';
import { filter } from 'rxjs';
import { AutoCompleteItem, FieldType } from '../field/field.component';
import { AutoCompleteCompleteEvent, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { LeftMenuItem } from '../leftmenu/leftmenu.component';
import { ButtonType } from '../button/button.component';
import { Utils } from 'src/app/utils/utils';
import { MenuItem } from 'primeng/api';

export interface SchemeColor {
	label?: string;
	value?: any;
	icon?: string;
	class?: string;
}

@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	standalone: false,
})

export class TopBarComponent implements OnInit {

	public configRightDrawer: boolean = false;
	public userRightDrawer: boolean = false;
	public themeColor?: SchemeColor[];
	public schemeColor?: SchemeColor[];
	public scales: number[] = [12, 13, 14, 15, 16];
	public currentTheme?: SchemeColor;
	public currentScheme?: string;
	public menuVisible: boolean = true;
	public filteredItems: LeftMenuItem[] = [];

	@Input() public items: AutoCompleteItem[] | LeftMenuItem[] = [];

	constructor(private router: Router,
		public mainService: MainService) {
		window.addEventListener('resize', () => this.onResize());

		this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe(() => {
			this.mainService?.menu?.next(false);

			if (window.innerWidth <= 991) {
				this.mainService?.menu?.next(true);
			}
		});

		this.mainService?.menu?.subscribe((value: boolean) => {
			this.menuVisible = value;

			const fixedBottomBar: HTMLElement | null = document?.querySelector('.fixed-bottombar');
			const leftMenu: HTMLElement | null = document?.querySelector('.leftmenu');
			const main: HTMLElement | null = document?.querySelector('.main');

			if (leftMenu && main) {
				if (!this.mainService.isMobile()) {
					leftMenu.style.width = this.menuVisible ? '0' : '18rem';
					main.style.marginLeft = this.menuVisible ? '0' : '18rem';
				} else {
					leftMenu.style.width = this.menuVisible ? '0' : '18rem';
					main.style.marginLeft = '0';
				}
			}

			if (fixedBottomBar) {
				if (!this.mainService.isMobile()) {
					fixedBottomBar.style.left = this.menuVisible ? '0' : '18rem';
					fixedBottomBar.style.width = this.menuVisible ? '100%' : 'calc(100% - 18rem)';
				} else {
					fixedBottomBar.style.left = '0';
					fixedBottomBar.style.width = '100%';
				}
			}
		});
	}

	get ButtonType() {
		return ButtonType;
	}

	get DocumentType() {
		return DocumentType;
	}

	get FieldType() {
		return FieldType;
	}

	public ngOnInit(): void {
		this.themeColor = [
			{ label: 'Confiança', value: 'var(--custom-500)', class: 'custom' },
			{ label: 'Indígo', value: 'var(--indigo-500)', class: 'indigo' },
			{ label: 'Azul', value: 'var(--blue-500)', class: 'blue' },
			{ label: 'Roxo', value: 'var(--purple-500)', class: 'purple' },
			{ label: 'Verde-Azulado', value: 'var(--teal-500)', class: 'teal' },
			{ label: 'Ciano', value: 'var(--cyan-500)', class: 'cyan' },
			{ label: 'Verde', value: 'var(--green-500)', class: 'green' },
			{ label: 'Laranja', value: 'var(--orange-500)', class: 'orange' },
			{ label: 'Rosa', value: 'var(--pink-500)', class: 'pink' },
			{ label: 'Vermelho', value: 'var(--red-500)', class: 'red' },
			{ label: 'Amarelo', value: 'var(--yellow-500)', class: 'yellow' },
		];

		this.schemeColor = [
			{ label: 'Claro', value: 'light', icon: 'fas fa-sun' },
			{ label: 'Escuro', value: 'dark', icon: 'fas fa-moon' },
		];

		this.onChangeSchemeColor(this.getSchemeColor());
		this.onChangeThemeColor(this.getThemeColor());
	}

	public getCurrentThemeColor(theme: SchemeColor): boolean {
		return theme?.value == this.currentTheme?.value;
	}

	private getSchemeColor(): SchemeColor {
		const localScheme: string | null = localStorage?.getItem('_sc')

		if (localScheme) {
			return JSON.parse(localScheme);
		} else {
			return this.schemeColor?.[0] ?? {};
		}
	}

	private getThemeColor(): SchemeColor {
		const localTheme: string | null = localStorage?.getItem('_th')

		if (localTheme) {
			return JSON.parse(localTheme);
		} else {
			return this.themeColor?.[0] ?? {};
		}
	}

	public onChangeSchemeColor(scheme: SchemeColor): void {
		const element: HTMLHtmlElement | null = document?.querySelector('html');

		element?.classList?.remove('light', 'dark');
		element?.classList?.toggle(scheme?.value);

		this.currentScheme = scheme?.value;

		if (this.currentScheme) {
			localStorage?.setItem('_sc', JSON.stringify(scheme));
		}
	}

	public onChangeThemeColor(theme?: SchemeColor): void {
		const element: HTMLHtmlElement | null = document.querySelector('html');

		element?.classList?.remove('indigo', 'blue', 'purple', 'teal', 'cyan', 'green', 'orange', 'pink', 'red', 'yellow', 'custom');
		element?.classList?.toggle(theme?.class!);

		this.currentTheme = theme;

		if (this.currentScheme) {
			localStorage?.setItem('_th', JSON.stringify(theme));
		}
	}

	private onResize(): void {
		this.mainService?.menu?.next(window.innerWidth <= 991);
	}

	public onSearch(event: AutoCompleteCompleteEvent): void {
		function fuzzyIncludes(fullText: string, searchText: string): boolean {
			const normalizedFull: string | undefined = Utils.normalize(fullText);
			const normalizedWords: string[] | undefined = Utils.normalize(searchText)?.split(/\s+/);

			return normalizedWords?.every(word =>
				normalizedFull?.includes(word) || normalizedFull?.includes(word + 's')
			) ?? false;
		}

		function filterMenu(this$: TopBarComponent, menuItem: LeftMenuItem, searchedString: string): void {
			if (menuItem?.label?.toLowerCase()?.includes(searchedString?.toLowerCase())) {
				let itemFake: LeftMenuItem = {};

				Object.assign(itemFake, menuItem);

				this$.filteredItems?.push(itemFake);
			}
		}

		function filterSubMenu(this$: TopBarComponent, menuItem: LeftMenuItem, searchString: string): void {
			menuItem?.items?.map((subMenuItem: LeftMenuItem) => {
				const subMenuLabel: string = Utils.normalize(subMenuItem?.label);
				const searchedString: string = Utils.normalize(searchString);

				if (fuzzyIncludes(subMenuLabel?.trim(), searchedString?.trim())) {
					let itemFake: LeftMenuItem = {};

					Object.assign(itemFake, menuItem);

					const parent: LeftMenuItem | undefined = this$.filteredItems?.find((menuParent: LeftMenuItem) => menuParent.label == itemFake?.label);

					if (parent) {
						const indexOfParent: number = this$.filteredItems?.indexOf(parent);
						const filteredSubMenuItems: MenuItem[] | undefined = menuItem?.items?.filter((_subMenuItem: any) => _subMenuItem == subMenuItem);

						for (const subMenu of filteredSubMenuItems ?? []) {
							parent?.items?.push(subMenu);
						}

						this$.filteredItems[indexOfParent] = parent;
					} else {
						itemFake.items = menuItem?.items?.filter((_subMenuItem: any) => _subMenuItem == subMenuItem);

						const itemHasLink: MenuItem[] | undefined = itemFake.items?.filter((item) => item?.routerLink);

						if ((itemHasLink?.length ?? 0) > 0) {
							this$.filteredItems?.push(itemFake);
						}
					}
				}
			})

			if ((menuItem?.items?.length ?? 0) > 0) {
				for (const item of menuItem?.items ?? []) {
					filterSubMenu(this$, item, searchString);
				}
			}
		}

		this.filteredItems = [];

		this.items?.map((menuItem: LeftMenuItem) => filterSubMenu(this, menuItem, event?.query));

		if ((this.filteredItems?.length ?? 0) <= 0) {
			this.items?.map((menuItem: LeftMenuItem) => filterMenu(this, menuItem, event?.query));
		}
	}

	public onSelectSearch(event: AutoCompleteSelectEvent): void {
		this.router?.navigate(event?.value?.routerLink ?? ['']);
	}

	public onShowConfigurations(): void {
		this.configRightDrawer = true;
	}

	public onShowUser(): void {
		this.userRightDrawer = true;
	}

	public onShowHideMenu(): void {
		this.mainService?.menu?.next(!this.menuVisible);
	}
}
