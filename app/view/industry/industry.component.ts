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
	selector: 'app-industry',
	templateUrl: './industry.component.html',
	standalone: false,
})

export class IndustryComponent extends PatternComponent {

	public industryPreObject: CalculatorObject = new CalculatorObject();
	public industryPostObject: CalculatorObject = new CalculatorObject();
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
		this.industryPreObject.b7 = this.evaluateValue(
			(this.industryPreObject.b2 + this.industryPreObject.b6) / (1 - (this.industryPreObject.b3 / 100) - (this.industryPreObject.b4 / 100) - (this.industryPreObject.b5 / 100))
		);

		// =B7-B6-B2-(B7*(B3+B4))
		this.industryPreObject.b8 = this.evaluateValue(
			this.industryPreObject.b7 - this.industryPreObject.b6 - this.industryPreObject.b2 - (this.industryPreObject.b7 * ((this.industryPreObject.b3 / 100) + (this.industryPreObject.b4 / 100)))
		);

		// =B7
		this.industryPreObject.b9 = this.evaluateValue(this.industryPreObject.b7);

		// =(B10-B6-B2-(B10*B3)-(B10*B4))/B10
		this.industryPreObject.b11 = this.evaluateValue(
			100 * (this.industryPreObject.b10 - this.industryPreObject.b6 - this.industryPreObject.b2 - (this.industryPreObject.b10 * (this.industryPreObject.b3 / 100)) - (this.industryPreObject.b10 * (this.industryPreObject.b4 / 100))) / this.industryPreObject.b10, 0
		);

		// =B10-B2-B6-(B10*B3)-(B10*B4)
		this.industryPreObject.b12 = this.evaluateValue(
			this.industryPreObject.b10 - this.industryPreObject.b2 - this.industryPreObject.b6 - (this.industryPreObject.b10 * (this.industryPreObject.b3 / 100)) - (this.industryPreObject.b10 * (this.industryPreObject.b4 / 100))
		);

		// =B10
		this.industryPreObject.b13 = this.evaluateValue(this.industryPreObject.b10);
	}

	public calculatePostReform(): void {
		// =(D2+D6)/(100%-D4-D5)
		this.industryPostObject.b7 = this.evaluateValue(
			(this.industryPostObject.b2 + this.industryPostObject.b6) / (1 - (this.industryPostObject.b4 / 100) - (this.industryPostObject.b5 / 100))
		);

		// =D7-D6-D2-(D7*D4)
		this.industryPostObject.b8 = this.evaluateValue(
			this.industryPostObject.b7 - this.industryPostObject.b6 - this.industryPostObject.b2 - (this.industryPostObject.b7 * (this.industryPostObject.b4 / 100))
		);

		// =D7+(D7*D3)
		this.industryPostObject.b9 = this.evaluateValue(
			this.industryPostObject.b7 + (this.industryPostObject.b7 * (this.industryPostObject.b3 / 100))
		);

		// =(D10-D6-D2-(D10*D4))/D10
		this.industryPostObject.b11 = this.evaluateValue(
			100 * (this.industryPostObject.b10 - this.industryPostObject.b6 - this.industryPostObject.b2 - (this.industryPostObject.b10 * (this.industryPostObject.b4 / 100))) / this.industryPostObject.b10, 0
		);

		// =(D10-D6-D2)-(D10*D4)
		this.industryPostObject.b12 = this.evaluateValue(
			(this.industryPostObject.b10 - this.industryPostObject.b6 - this.industryPostObject.b2) - (this.industryPostObject.b10 * (this.industryPostObject.b4 / 100))
		);

		// =D10+(D10*D3)
		this.industryPostObject.b13 = this.evaluateValue(
			this.industryPostObject.b10 + (this.industryPostObject.b10 * (this.industryPostObject.b3 / 100))
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
