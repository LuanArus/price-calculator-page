import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'primeng/blockui';
import { BlockUiComponent } from './blockui.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
	imports: [
		BlockUIModule,
		CommonModule,
		FormsModule,
		ProgressSpinnerModule,
		ReactiveFormsModule,
	],
	providers: [],
	declarations: [BlockUiComponent],
	exports: [BlockUiComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppBlockUiModule { }