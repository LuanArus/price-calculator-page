import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceComponent } from './service.component';
import { RouterModule, Routes } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { AppButtonModule } from 'src/app/components/button/button.module';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { TourPrimeNgModule } from 'ngx-ui-tour-primeng';
import { AppBlockUiModule } from 'src/app/components/blockui/blockui.module';
import { MessageModule } from 'primeng/message';
import { AppFieldModule } from 'src/app/components/field/field.module';
import { TabsModule } from 'primeng/tabs';

const route: Routes = [
	{ path: '', component: ServiceComponent },
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [
		AccordionModule,
		AppBlockUiModule,
		AppButtonModule,
		AppFieldModule,
		TabsModule,
		CommonModule,
		DrawerModule,
		FormsModule,
		MessageModule,
		PanelModule,
		ReactiveFormsModule,
		ToastModule,
		TourPrimeNgModule,
		RouterModule.forChild(route),
	],
	providers: [],
	declarations: [ServiceComponent],
	exports: [RouterModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ServiceModule { }