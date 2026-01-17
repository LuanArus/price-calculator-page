import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PatternComponent } from '@view/pattern/pattern.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MainComponent } from '@view/main/main.component';
import { LeftMenuItem } from 'src/app/components/leftmenu/leftmenu.component';
import { MainService } from '@controller/main.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	standalone: false,
})

export class DashboardComponent extends PatternComponent {

	public menuItems: LeftMenuItem[] = [];
	
	constructor(public override mainService: MainService,
		protected override formBuilder: FormBuilder,
		protected override confirmationService: ConfirmationService,
		protected override messageService: MessageService,
		protected route: Router,
		protected mainComponent: MainComponent) {
		super(mainService, formBuilder, confirmationService, messageService);
	}

	public override ngOnInit(): void {
		super.ngOnInit();
	}

	public override ngDoCheck(): void {
		super.ngDoCheck();
	}

	protected override canRegisterClose(): void { }

	public contactSupport(): void {
		window.open(`https://wa.me/5554999685468?text=Olá, preciso de um suporte referente a Calculadora de Preços`, '_blank');
	}

	public async onNew(): Promise<void> { }

	protected override setValidators(): void { }

	protected override setValidatorValues(): void { }

}
