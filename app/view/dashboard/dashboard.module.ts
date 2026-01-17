import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AppButtonModule } from 'src/app/components/button/button.module';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DrawerModule } from 'primeng/drawer';
import { AccordionModule } from 'primeng/accordion';
import { AppBlockUiModule } from 'src/app/components/blockui/blockui.module';

const route: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: '**', redirectTo: '' },

];

@NgModule({
	imports: [
		AppBlockUiModule,
		AppButtonModule,
		AccordionModule,
		CommonModule,
		DividerModule,
		DragDropModule,
		DrawerModule,
		FormsModule,
		PanelModule,
		ReactiveFormsModule,
		TooltipModule,
		RouterModule.forChild(route),
	],
	providers: [],
	declarations: [DashboardComponent],
	exports: [RouterModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class DashboardModule { }