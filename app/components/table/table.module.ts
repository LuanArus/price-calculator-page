import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table.component';
import { TagModule } from 'primeng/tag';
import { DrawerModule } from 'primeng/drawer';
import { AppButtonModule } from '../button/button.module';
import { SkeletonModule } from 'primeng/skeleton';
import { DataViewModule } from 'primeng/dataview';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { AppFieldModule } from '../field/field.module';
import { TourPrimeNgModule } from 'ngx-ui-tour-primeng';
import { BadgeModule } from 'primeng/badge';

@NgModule({
	imports: [
		AppButtonModule,
		AppFieldModule,
		BadgeModule,
		CheckboxModule,
		CommonModule,
		DataViewModule,
		DrawerModule,
		FormsModule,
		ReactiveFormsModule,
		SkeletonModule,
		TableModule,
		TagModule,
		ToastModule,
		SelectButtonModule,
		TooltipModule,
		TourPrimeNgModule,
	],
	providers: [],
	declarations: [TableComponent],
	exports: [TableComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppTableModule { }