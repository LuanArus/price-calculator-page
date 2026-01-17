import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

export enum ButtonType {
	'Button' = 'button',
	'ButtonSecondary' = 'buttonsecondary',
	'ButtonCheck' = 'buttoncheck',
	'ButtonCancel' = 'buttoncancel',
	'ButtonDelete' = 'buttondelete',
	'ButtonRevert' = 'buttonrevert',
	'SplitButton' = 'splitbutton',
	'SplitButtonSingle' = 'splitbuttonsingle',
}

export interface ActionItem extends MenuItem {
	disabledManySelection?: boolean;
}

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	standalone: false,
})

export class ButtonComponent {

	@Input() public label?: string;
	@Input() public type?: ButtonType;
	@Input() public fluid: boolean = true;
	@Input() public icon?: string;
	@Input() public options?: MenuItem[];
	@Input() public changeOnMobile: boolean = false;
	@Input() public noBackground: boolean = false;
	@Input() public noBorder: boolean = false;
	@Input() public disabled?: boolean = false;
	@Input() public styleClass?: string;
	@Input() public loading: boolean = false;
	@Input() public iconPos: 'left' | 'right' | 'top' | 'bottom' = 'left';
	@Input() public speedDialDirection?: "left" | "right" | "up" | "down" | "up-left" | "up-right" | "down-left" | "down-right";

	@Output() public onClick: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onDropdownClick: EventEmitter<any> = new EventEmitter<any>();

	get ButtonType() {
		return ButtonType;
	}

	constructor() { }

	public ngOnInit(): void { }

	public ngDestroy(): void {
		this.onClick.unsubscribe();
		this.onDropdownClick.unsubscribe();
	}

	public getLabel(): string | undefined {
		if (!this.loading) {
			return this.label;
		}

		return undefined;
	}

	public myClick(event: Event): void {
		this.onClick.emit(event);
	}

	public myDropdownClick(): void {
		this.onDropdownClick.emit();
	}
}
