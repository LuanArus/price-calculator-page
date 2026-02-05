import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';

@NgModule({
	imports: [
		ButtonModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SpeedDialModule,
		SplitButtonModule,
	],
	providers: [],
	declarations: [ButtonComponent],
	exports: [ButtonComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppButtonModule { }