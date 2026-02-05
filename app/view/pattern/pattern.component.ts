import { ElementRef, Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MainService } from '@controller/main.service';
import { TourService } from 'ngx-ui-tour-primeng';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Panel } from 'primeng/panel';
import { ButtonType } from 'src/app/components/button/button.component';
import { FieldComponent, FieldFilter, FieldType } from 'src/app/components/field/field.component';
import { ExecutionTime } from 'src/app/models/_executiontime';
import { Step } from 'src/app/models/interfaces/_step';
import { ExportType } from 'src/app/components/table/table.component';
import { DynamicObject } from 'src/app/models/interfaces/_dynamicobject';

@Injectable()
export abstract class PatternComponent {

	public form!: FormGroup;
	public rightDrawer: boolean = false;
	public submitted: boolean = false;
	public executionTime: ExecutionTime = new ExecutionTime();
	public blockUI: boolean = false;
	public blockUIPanel?: Panel | ElementRef<any>;
	public blockUIMessage?: string;
	public tourSteps?: Step[] = [];
	public limit?: number = 0;
	public tourConfig?: any;
	public filters: FieldFilter[] = [];
	public dynamicDrawerObject: DynamicObject = { visible: false } as DynamicObject;

	constructor(public mainService: MainService,
		protected formBuilder?: FormBuilder,
		protected confirmationService?: ConfirmationService,
		protected messageService?: MessageService,
		protected tourService?: TourService) {
	}

	// Types

	get ButtonType() {
		return ButtonType;
	}

	get DocumentType() {
		return DocumentType;
	}

	get ExportType() {
		return ExportType;
	}

	get FieldType() {
		return FieldType;
	}

	get validator(): any {
		return this.form?.controls;
	}

	protected abstract setValidators(): void;
	protected abstract setValidatorValues(): void;
	protected abstract onNew(newName: string): Promise<void>;
	protected abstract canRegisterClose(): void;

	public ngOnInit(): void {
		this.initializeForm();
		this.setTourConfig();
		this.setValidators();

		this.tourService?.initialize(this.tourSteps!, this.tourConfig);

		this.tourService?.stepShow$?.subscribe((tourElement: any) => {
			setTimeout(() => {
				const inputElement: Element | null = document?.querySelector('[tourAnchor="' + tourElement.step.anchorId + '"] input');

				if (inputElement && !inputElement?.classList?.contains('p-datepicker-input')) {
					(inputElement as HTMLElement)?.focus();
				}
			}, 100);
		});
	}

	public ngAfterViewInit(): void { }

	public ngDoCheck(): void {
		this.setValidatorValues();
	}

	public evaluateValue(value: number, decimals: number = 2): number {
		return isNaN(value) || value == Infinity || value == -Infinity || value <= 0 ? 0 : this.roundValue(value, decimals);
	}

	public initializeForm(): void {
		if (this.formBuilder) {
			this.form = this.formBuilder.group({});
		}
	}

	public async newest(newFunction: Function): Promise<void> {
		this.limit = undefined;
		this.blockUI = true;
		this.blockUIMessage = 'Carregando Informações...';

		const startFrom: number = new Date()?.getTime();

		this.tourService?.pause();

		await newFunction()
			.finally(() => {
				setTimeout(() => {
					this.tourService?.next();
				}, 100);

				this.blockUI = false;
				this.executionTime.saveTime = (new Date()?.getTime() - startFrom) / 1000;
			});
	}

	// Open DynamicDrawer
	public onOpenNew(component: any, width: string, field?: FieldComponent, newName?: string): void {
		const currentDrawer: DynamicObject[] = this.mainService?.dynamicObjects.value ?? [];

		const newDrawer: DynamicObject = {
			visible: true,
			width: width,
			data: newName,
			field: field,
			component: component,
		};

		this.mainService?.dynamicObjects?.next([...currentDrawer, newDrawer]);
	}

	public onShowHideRegisterDrawer(visible: boolean, canceling: boolean = false): void {
		this.submitted = !visible;
		this.rightDrawer = visible;

		window.dispatchEvent(new Event('resize'));
	}

	public onShowAlertMessage(message: string, key: string = 'app-confirmation'): void {
		this.confirmationService?.confirm({
			header: 'Atenção',
			message: message,
			key: key,
			icon: 'fas fa-triangle-exclamation',
			rejectVisible: false,
			acceptLabel: 'OK',
			acceptButtonStyleClass: 'p-button-rounded p-button-primary',
			reject: () => { }
		});
	}

	public onShowConfirmationMessage(message: string, accept: Function, reject?: Function): void {
		this.confirmationService?.confirm({
			header: 'Confirme',
			message: message,
			key: 'app-confirmation',
			icon: 'fa-regular fa-circle-question',
			acceptLabel: 'Sim',
			rejectLabel: 'Não',
			acceptButtonStyleClass: 'p-button-rounded p-button-primary',
			rejectButtonStyleClass: 'p-button-rounded p-button-danger reject-button',
			acceptIcon: 'fas fa-check',
			rejectIcon: 'fas fa-times',
			acceptVisible: true,
			rejectVisible: true,
			accept: () => {
				accept();
			},
			reject: () => {
				if (reject) {
					reject();
				}
			}
		});
	}

	public onShowErrorMessage(message: string): void {
		this.confirmationService?.confirm({
			header: 'Erro',
			message: message,
			key: 'app-confirmation',
			icon: 'fas fa-bug',
			rejectVisible: false,
			acceptLabel: 'OK',
			acceptButtonStyleClass: 'p-button-rounded p-button-primary',
			reject: () => { }
		});
	}

	public onShowInfoMessage(message: string, key: string = 'app-confirmation'): void {
		this.confirmationService?.confirm({
			header: 'Informação',
			message: message,
			key: key,
			icon: 'fas fa-check',
			rejectVisible: false,
			acceptLabel: 'OK',
			acceptButtonStyleClass: 'p-button-rounded p-button-primary',
			reject: () => { }
		});
	}

	public onShowToastMessage(message?: string): void {
		if (message) {
			this.messageService?.add({ key: 'action-toast', severity: 'contrast', summary: message, sticky: true, });
		} else {
			this.messageService?.clear();
		}
	}

	public onStartTour(): void {
		this.tourService?.start();
	}

	public onValid(submitted: boolean, formError: AbstractControl<any>): boolean {
		return !(submitted && formError?.errors);
	}

	public roundValue(value: number, decimals = 2): number {
		const factor = Math.pow(10, decimals);
		return Math.round((value + Number.EPSILON) * factor) / factor;
	}

	private setTourConfig(): void {
		this.tourConfig = {
			enableBackdrop: true,
			showProgress: true,
			smoothScroll: true,
			prevBtnTitle: 'Anterior',
			nextBtnTitle: 'Próximo',
			endBtnTitle: 'Finalizar',
			duplicateAnchorHandling: 'registerFirst',
			stepDimensions: {
				minWidth: '350px',
				maxWidth: '400px',
			},
			backdropConfig: {
				offset: 10,
			},
		}
	}
}
