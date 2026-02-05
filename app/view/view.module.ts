import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { AppLeftMenuModule } from '../components/leftmenu/leftmenu.module';
import { AppTopbarModule } from '../components/topbar/topbar.module';

const route: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: 'dashboard',
				data: { breadcrumb: 'Início' },
				loadChildren: () => import('@view/dashboard/dashboard.module').then((m) => m.DashboardModule),
				pathMatch: 'full'
			},
			{
				path: 'industry',
				data: { breadcrumb: 'Ind. e Comércio' },
				loadChildren: () => import('@view/industry/industry.module').then((m) => m.IndustryModule),
				pathMatch: 'full'
			},
			{
				path: 'services',
				data: { breadcrumb: 'Serviços' },
				loadChildren: () => import('@view/service/service.module').then((m) => m.ServiceModule),
			},
		],
	},
];

@NgModule({
	imports: [
		AppLeftMenuModule,
		AppTopbarModule,
		CommonModule,
		ConfirmDialogModule,
		DialogModule,
		FormsModule,
		ProgressBarModule,
		ProgressSpinnerModule,
		ReactiveFormsModule,
		ToastModule,
		RouterModule.forChild(route),
	],
	providers: [],
	declarations: [MainComponent],
	exports: [RouterModule, MainComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ViewModule { }
