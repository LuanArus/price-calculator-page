import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftSubMenuComponent } from './leftsubmenu.component';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';

@NgModule({
	imports: [
		BadgeModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		TooltipModule,
	],
	declarations: [LeftSubMenuComponent],
	exports: [LeftSubMenuComponent],
})

export class AppLeftSubMenuModule { }