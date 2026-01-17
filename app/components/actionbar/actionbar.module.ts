import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppButtonModule } from '../button/button.module';
import { ActionbarComponent } from './actionbar.component';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { AppFieldModule } from '../field/field.module';
import { PopoverModule } from 'primeng/popover';
import { TourPrimeNgModule } from 'ngx-ui-tour-primeng';
import { TooltipModule } from 'primeng/tooltip';
import { DrawerModule } from 'primeng/drawer';
import { ChipModule } from 'primeng/chip';

@NgModule({
	imports: [
		AppFieldModule,
		AppButtonModule,
		ChipModule,
		DrawerModule,
		CommonModule,
		FormsModule,
		IconFieldModule,
		InputIconModule,
		InputTextModule,
		PopoverModule,
		TooltipModule,
		TourPrimeNgModule,
		ReactiveFormsModule,
	],
	providers: [],
	declarations: [ActionbarComponent],
	exports: [ActionbarComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppActionbarModule { }