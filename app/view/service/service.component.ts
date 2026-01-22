import { Component, ModelSignal, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MainService } from '@controller/main.service';
import { PatternComponent } from '@view/pattern/pattern.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TourService } from 'ngx-ui-tour-primeng';
import { Panel } from 'primeng/panel';

export class CalculatorObject {
	public b2: number;
	public b3: number;
	public b4: number;
	public b5: number;
	public b6: number;
	public b7: number;
	public b8: number;
	public b9: number;
	public b10: number;
	public b11: number;
	public b12: number;
	public b13: number;

	constructor() {
		this.b2 = 0;
		this.b3 = 0;
		this.b4 = 0;
		this.b5 = 0;
		this.b6 = 0;
		this.b7 = 0;
		this.b8 = 0;
		this.b9 = 0;
		this.b10 = 0;
		this.b11 = 0;
		this.b12 = 0;
		this.b13 = 0;
	}
}

@Component({
	selector: 'app-service',
	templateUrl: './service.component.html',
	standalone: false,
})

export class ServiceComponent extends PatternComponent {

	public servicePreObject: CalculatorObject = new CalculatorObject();
	public servicePostObject: CalculatorObject = new CalculatorObject();
	public currentTab: string = '0';

	@ViewChild('defaultPanel') public defaultPanel?: Panel;

	constructor(public override mainService: MainService,
		protected override formBuilder: FormBuilder,
		protected override confirmationService: ConfirmationService,
		protected override messageService: MessageService,
		protected override tourService: TourService) {
		super(mainService, formBuilder, confirmationService, messageService, tourService);
	}

	public override ngOnInit(): void {
		this.addTourSteps();

		super.ngOnInit();
	}

	public override ngAfterViewInit(): void {
		setTimeout(() => {
			this.mainService.menu.next(this.mainService.isMobile());
		}, 1);
	}

	public override ngDoCheck(): void {
		super.ngDoCheck();
	}

	private addTourSteps(): void {
		this.tourSteps = [
			{
				anchorId: 't-new-button',
				title: 'Iniciando o cadastro',
				content: 'Para iniciar o cadastro de um almoxarifado, clique no botão destacado.',
				visiblePrev: false,
				visibleNext: false,
			},
			{
				anchorId: 't-field-name',
				title: 'Informando os dados obrigatórios',
				content: '<b class="required"> (Obrigatório) </b> \n\nPrencha o campo <b> Nome </b> com o nome do almoxarifado que você deseja. \n\n <b> Exemplo </b> \n - Estoque Padrão \n - Almox. 001 \n',
				visiblePrev: false,
				visibleNext: true,
			},
			{
				anchorId: 't-save-button',
				title: 'Finalizando o cadastro',
				content: 'Para finalizar o cadastro, clique no botão destacado.',
				visiblePrev: true,
				visibleNext: false,
			},
		];
	}

	public calculatePreReform(): void {
		// =(B2+B6)/(100%-B3-B4-B5)
		this.servicePreObject.b7 = this.evaluateValue(
			(this.servicePreObject.b2 + this.servicePreObject.b6) / (1 - (this.servicePreObject.b3 / 100) - (this.servicePreObject.b4 / 100) - (this.servicePreObject.b5 / 100))
		);

		// =B7-B6-B2-(B7*(B3+B4))
		this.servicePreObject.b8 = this.evaluateValue(
			this.servicePreObject.b7 - this.servicePreObject.b6 - this.servicePreObject.b2 - (this.servicePreObject.b7 * ((this.servicePreObject.b3 / 100) + (this.servicePreObject.b4 / 100))));

		// =B7
		this.servicePreObject.b9 = this.evaluateValue(this.servicePreObject.b7);

		// =(B9-B2-B6-(B9*B3)-(B9*B4))/B9
		this.servicePreObject.b11 = this.evaluateValue(
			100 * (this.servicePreObject.b10 - this.servicePreObject.b2 - this.servicePreObject.b6 - (this.servicePreObject.b10 * (this.servicePreObject.b3 / 100)) - (this.servicePreObject.b10 * (this.servicePreObject.b4 / 100))) / this.servicePreObject.b10
		);

		// =B9-B2-B6-(B9*(B4+B3))
		this.servicePreObject.b12 = this.evaluateValue(
			this.servicePreObject.b10 - this.servicePreObject.b2 - this.servicePreObject.b6 - (this.servicePreObject.b10 * ((this.servicePreObject.b4 / 100) + (this.servicePreObject.b3 / 100)))
		);

		// =B9
		this.servicePreObject.b13 = this.evaluateValue(this.servicePreObject.b10);
	}

	public calculatePostReform(): void {
		// =(I2+I6)/(100%-I4-I5)
		this.servicePostObject.b7 = this.evaluateValue(
			(this.servicePostObject.b2 + this.servicePostObject.b6) / (1 - (this.servicePostObject.b4 / 100) - (this.servicePostObject.b5 / 100))
		);

		// =I7-I6-I2-(I7*I4)
		this.servicePostObject.b8 = this.evaluateValue(
			this.servicePostObject.b7 - this.servicePostObject.b6 - this.servicePostObject.b2 - (this.servicePostObject.b7 * (this.servicePostObject.b4 / 100))
		);

		// =I7+(I7*I3)
		this.servicePostObject.b9 = this.evaluateValue(
			this.servicePostObject.b7 + (this.servicePostObject.b7 * (this.servicePostObject.b3 / 100))
		);

		// =(I9-I2-I6-(I9*I4))/I9
		this.servicePostObject.b11 = this.evaluateValue(
			100 * ((this.servicePostObject.b10 - this.servicePostObject.b2 - this.servicePostObject.b6 - (this.servicePostObject.b10 * (this.servicePostObject.b4 / 100))) / this.servicePostObject.b10), 0
		);

		// =I9-I2-I6-(I9*(I4))
		this.servicePostObject.b12 = this.evaluateValue(
			this.servicePostObject.b10 - this.servicePostObject.b2 - this.servicePostObject.b6 - (this.servicePostObject.b10 * (this.servicePostObject.b4 / 100))
		);

		// =I9+(I9*I3)
		this.servicePostObject.b13 = this.evaluateValue(
			this.servicePostObject.b10 + (this.servicePostObject.b10 * (this.servicePostObject.b3 / 100))
		);
	}

	protected override canRegisterClose(): void { }

	public onCancel(): void {
		this.onShowHideRegisterDrawer(false);
	}

	protected override async onNew(newName: string): Promise<void> {
		await super.newest(async () => {
			this.onShowHideRegisterDrawer(true);
		});
	};

	protected override setValidators(): void { }

	protected override setValidatorValues(): void { }

}
