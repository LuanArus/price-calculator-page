import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { AutoComplete, AutoCompleteCompleteEvent, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { DatePicker } from 'primeng/datepicker';
import { ButtonType } from '../button/button.component';
import { Select } from 'primeng/select';
import { MultiSelectChangeEvent } from 'primeng/multiselect';
import { InputNumberInputEvent } from 'primeng/inputnumber';

export enum FieldType {
	'AutoComplete' = 'autocomplete',
	'Currency' = 'currency',
	'Date' = 'date',
	'MaskDocument' = 'maskdocument',
	'MaskPhone' = 'maskphone',
	'MaskZipCode' = 'maskzipcode',
	'Number' = 'number',
	'Password' = 'password',
	'MultiSelect' = 'multiselect',
	'Select' = 'select',
	'Text' = 'text',
	'Switch' = 'switch',
	'ColorPicker' = 'colorpicker',
	'Slider' = 'slider',
	'Editor' = 'editor',
}

export interface AutoCompleteItem {
	label?: string;
	value?: any;
}

export interface FieldFilter {
	label?: string;
	field?: string | string[];
	model?: any;
	resetModel?: any;
	icon?: string;
	fieldType?: FieldType;
	fieldFloat?: boolean;
	sliderFieldMin?: number;
	sliderFieldMax?: number;
	sliderDecimalPlaces?: number;
	fieldValueIsNull?: boolean;
	fieldStyleClass?: string;
	selectOptions?: any;
	selectComponent?: string;
	dateMode?: string;
	getModel?: Function;
}

@Component({
	selector: 'app-field',
	templateUrl: './field.component.html',
	standalone: false,
})

export class FieldComponent {

	private inputing: boolean = false;
	public keepInvalid: boolean = false;
	public autoCompleteRoute?: string;
	public autoCompleteValue: string = 'value';
	public autoCompleteFindDefault?: () => void;

	public selectRoute?: string;
	public selectValue?: string;
	public selectLastResults: number = 0;
	public selectNewRegister?: Function;

	@ViewChild('autocomplete') public autocomplete?: AutoComplete;
	@ViewChild('select') public select?: Select;
	@ViewChild('slider') public slider?: ElementRef;

	@Input() public label?: string;
	@Input() public float: boolean = true;
	@Input() public fluid: boolean = true;
	@Input() public type?: FieldType;
	@Input() public icon?: string;
	@Input() public group: boolean = false;
	@Input() public placeholder?: string;
	@Input() public items: any[] = [];
	@Input() public dateMode?: any = 'single'; // single or range
	@Input() public disabled: boolean = false;
	@Input() public styleClass: string = '';
	@Input() public valid: boolean = true;
	@Input() public passwordFeedback: boolean = true;
	@Input() public autoCompleteLabel?: string = 'label';
	@Input() public autoCompleteComponent?: string;
	@Input() public autoCompleteClearAfterSelect: boolean = false;
	@Input() public autoCompleteFind?: (value?: any) => void;
	@Input() public switchBoolean?: boolean = true;
	@Input() public maxLength: number | string | null = null;
	@Input() public upperCase: boolean = false;
	@Input() public iconPos: 'left' | 'right' = 'left';
	@Input() public selectLabel?: string = 'name';
	@Input() public selectOptions: any;
	@Input() public selectComponent?: string;
	@Input() public selectFind?: (value?: any) => void;
	@Input() public selectLimit?: number;
	@Input() public sliderMinValue?: number = 0;
	@Input() public sliderMaxValue?: number = 100;
	@Input() public sliderDecimalPlaces?: number = 2;

	@Output() public onChange: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onSearch: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onSelect: EventEmitter<AutoCompleteSelectEvent> = new EventEmitter<AutoCompleteSelectEvent>();
	@Output() public onInput: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onAutoCompleteNew: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onKeyDownEnter: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onBlur: EventEmitter<any> = new EventEmitter<any>();
	@Output() public onFocus: EventEmitter<any> = new EventEmitter<any>();

	get ButtonType() {
		return ButtonType;
	}

	get FieldType() {
		return FieldType;
	}

	private _model: any;
	@Output() private modelChange = new EventEmitter<any>();

	@Input()
	get model(): any {
		return this._model;
	}

	set model(value: any) {
		let returnValue: number = 0;

		if (this.type == FieldType.Currency || this.type == FieldType.Number) {
			if (value === null || value === undefined || value === '') {
				value = 0;
			}

			try {
				returnValue = Number(value);
			} catch { }
		}

		if (this.type == FieldType.AutoComplete) {
			value = this.getLabelByHierarchy(value);
		}

		if (this.type == FieldType.MultiSelect) {
			value = this.getLabelByHierarchy(value);
		}

		if (!this.inputing) {
			if (this.type == FieldType.MaskDocument) {
				if (value?.length == 11 && value?.indexOf('.') <= 0) {
					value = value?.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/, '$1.$2.$3-$4');
				} else if (value?.length == 14 && value?.indexOf('.') <= 0) {
					value = value?.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/, '$1.$2.$3/$4-$5');
				}
			}

			if (this.type == FieldType.MaskPhone) {
				if (value?.length == 10 && value?.indexOf('(') <= 0) {
					value = value?.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})/, '($1) $2-$3')
				} else if (value?.length == 11 && value?.indexOf('(') <= 0) {
					value = value?.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/, '($1) $2 $3-$4');
				}
			}

			if (this.type == FieldType.MaskZipCode && value?.length == 8) {
				value = value?.replace(/^(\d{0,5})(\d{0,3})/, '$1-$2');
			}
		}

		if ((this.type == FieldType.Currency || this.type == FieldType.Number) && !Number.isNaN(returnValue) && returnValue >= 0) {
			this._model = returnValue;
		} else {
			if (this.upperCase) {
				this._model = value?.toUpperCase();
			} else {
				this._model = value;
			}
		}

		this.modelChange.emit(this._model);
	}

	constructor() { }

	public ngOnInit(): void {
		this.configureSelectOptions();
	}

	public ngDestroy(): void {
		this.onChange.unsubscribe();
		this.onSearch.unsubscribe();
		this.onSelect.unsubscribe();
		this.onInput.unsubscribe();
		this.onAutoCompleteNew.unsubscribe();
		this.onKeyDownEnter.unsubscribe();
		this.onBlur.unsubscribe();
	}

	private configureSelectOptions(): void {
		if (this.selectOptions?.length > 0) {
			this.items = [...this.selectOptions];
		}
	}

	private getDate(value: string, finalDate: boolean = false): Date {
		const currentDate: Date = new Date;

		let [day, month, year]: number[] = [value?.substring(0, 2), value?.substring(2, 4), value?.substring(4, 8)]?.map(Number);

		month = (month) ? month : currentDate.getMonth() + 1;
		year = (year) ? year : currentDate.getFullYear();

		const validDate: Date = new Date(year, month - 1, day);

		if (!finalDate) {
			validDate.setHours(0, 0, 0, 0);
		} else {
			validDate.setHours(23, 59, 59, 999);
		}

		return validDate;
	}

	public getLabel(item: any): string | null {
		const keys: string[] | undefined = this.autoCompleteLabel?.split('.');

		item = this.getLabelByHierarchy(item);

		for (let key of keys ?? []) {
			if (item && item[key] !== undefined) {
				item = item[key];
			} else {
				return null;
			}
		}

		return item ?? '';
	}

	public getLabelByHierarchy(event: any): any {
		let item: string[] = [];

		if (event && event?.parent && (event instanceof Object)) {
			event.label = this.getLabelParent(event, item)?.reverse()?.join(' > ');
		}

		return event;
	}

	public getLabelParent(item: any, finalItem: string[]): string[] {
		if (this.autoCompleteLabel) {
			finalItem?.push(item?.[this.autoCompleteLabel]);

			if (item?.parent?.createdAt) {
				return this.getLabelParent(item?.parent, finalItem);
			}

			return finalItem;
		}

		return [''];
	}

	public getLabelSelected(item: any): string {
		const value: string | number = item?.reference ?? item?.code ?? item?.id ?? '';
		const label: string = item?.label ?? item?.entity?.name ?? item?.name ?? '';

		return value + ' - ' + label;
	}

	public getValue(item: any): string {
		return item[this.autoCompleteValue] ?? '';
	}

	public myAutoCompleteNew(event: any): void {
		this.onAutoCompleteNew.emit(event);
	}

	public myBlur(event: Event): void {
		this.inputing = false;

		this.onBlur.emit(event);
	}

	public myChange(event: Event | MultiSelectChangeEvent): void {
		this.onChange.emit(event);
	}

	public myChangeSliderByField(index: number, value: number): void {
		if (this.model) {
			this.model = [...this.model];
			this.model[index] = value;
		}
	}

	public myClear(): void {
		this.autocomplete?.hide();
	}

	public myFocus(event: Event): void {
		(event.target as HTMLInputElement)?.select();

		this.onFocus.emit(event);
	}

	public myInput(event: Event | InputNumberInputEvent): void {
		this.onInput.emit(event);
	}

	public myInputAutoComplete(): void {
		this.items = [];
	}

	public myInputDocument(event: Event, inputing: boolean = true): void {
		this.inputing = inputing;

		const validateDocument: Function = (newVal: string) => {
			this.label = 'CPF';

			if (newVal?.length == 0) {
				return '';
			} else if (newVal?.length <= 3) {
				return newVal?.replace(/^(\d{0,3})/, '$1');
			} else if (newVal?.length <= 6) {
				return newVal?.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})/, '$1.$2');
			} else if (newVal?.length <= 9) {
				return newVal?.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/, '$1.$2.$3');
			} else if (newVal?.length <= 11) {
				return newVal?.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/, '$1.$2.$3-$4');
			} else {
				this.label = 'CNPJ';

				return newVal?.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/, '$1.$2.$3/$4-$5');
			}
		}

		this.model = this.validateMaskField(event, validateDocument);

		this.onInput.emit(event);
	}

	public myInputPhone(event: Event, inputing: boolean = true): void {
		this.inputing = inputing;

		const validatePhone: Function = (newVal: string) => {
			if (newVal?.length == 0) {
				return '';
			} else if (newVal?.length <= 2) {
				return newVal?.replace(/^(\d{0,2})/, '($1)');
			} else if (newVal?.length <= 6) {
				return newVal?.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})/, '($1) $2');
			} else if (newVal?.length <= 10) {
				return newVal?.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})/, '($1) $2-$3');
			} else {
				return newVal?.replace(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/, '($1) $2 $3-$4');
			}
		}

		this.model = this.validateMaskField(event, validatePhone);

		this.onInput.emit(event);
	}

	public myInputZipCode(event: Event, inputing: boolean = true): void {
		this.inputing = inputing;

		const validateZipCode: Function = (newVal: string) => {
			if (newVal?.length == 0) {
				return '';
			} else if (newVal?.length <= 5) {
				return newVal?.replace(/^(\d{0,5})/, '$1');
			} else {
				return newVal?.replace(/^(\d{0,5})(\d{0,3})/, '$1-$2');
			}
		}

		this.model = this.validateMaskField(event, validateZipCode);

		this.onInput.emit(event);
	}

	public myKeyDownEnter(event: Event): void {
		this.onKeyDownEnter.emit(event);
	}

	@HostListener('paste', ['$event'])
	public myPaste(event: ClipboardEvent): void {
		event.preventDefault();

		let pastedText: string | undefined = event.clipboardData?.getData('text');

		if (this.type == FieldType.MaskDocument || this.type == FieldType.MaskPhone || this.type == FieldType.MaskZipCode) {
			pastedText = pastedText?.replace(new RegExp(/[.\/-]/g), '');

			if (this.type == FieldType.MaskDocument && ((pastedText?.length == 11) || (pastedText?.length == 14))) {
				this.myInputDocument({ target: { value: pastedText } } as any, false);
			}

			if (this.type == FieldType.MaskPhone && ((pastedText?.length == 8) || (pastedText?.length == 9) || (pastedText?.length == 10) || (pastedText?.length == 11))) {
				this.myInputPhone({ target: { value: pastedText } } as any, false);
			}

			if (this.type == FieldType.MaskZipCode && pastedText?.length == 8) {
				this.myInputZipCode({ target: { value: pastedText } } as any, false);
			}
		} else {
			this.model = pastedText;
		}
	}

	public async mySearch(event?: AutoCompleteCompleteEvent): Promise<void> {
		this.onSearch.emit(event);
	}

	public mySelect(event: AutoCompleteSelectEvent): void {
		event.value = this.getLabelByHierarchy(event.value);

		this.onSelect.emit(event);

		if (this.autoCompleteClearAfterSelect) {
			this.model = undefined;
		}
	}

	public async mySelectPanelShow(): Promise<void> {
		if ((this.selectOptions?.length ?? 0) <= 0) {
			await this.mySearch();
		}
	}

	public validateDate(datePicker: DatePicker): void {
		if (this.dateMode == 'range') {
			const value: string = datePicker?.inputfieldViewChild?.nativeElement?.value?.toString();

			if (value) {
				const rangedDate: string[] = value?.split(' - ');

				const initialDate: Date = this.getDate(rangedDate[0]);
				const finalDate: Date = this.getDate(rangedDate[1] ?? rangedDate[0], true);

				if (!isNaN(initialDate.getTime()) || !isNaN(finalDate.getTime())) {
					datePicker?.updateModel([initialDate, finalDate]);
				}
			}
		} else {
			const value: string = datePicker?.inputfieldViewChild?.nativeElement?.value?.replace(/\//g, '')?.toString();

			if (value) {
				datePicker!.inputfieldViewChild!.nativeElement!.value = null;

				const validDate: Date = this.getDate(value);

				if (!isNaN(validDate.getTime())) {
					datePicker?.updateModel(validDate);
				}
			}
		}
	}

	private validateMaskField(event: any, validate: Function): Function {
		if (isNaN(Number(event?.data)) || event?.data?.trim() == '') {
			let newVal: string = event?.target?.value?.replace(/\D/g, '');

			event.target.value = validate(newVal);
			return validate(newVal);
		}

		let newVal: string = event?.target?.value?.replace(/\D/g, '');

		if (event?.key == 'backspace') {
			newVal = newVal.substring(0, newVal.length - 1);
		}

		return validate(newVal);
	}

}
