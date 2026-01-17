import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteComponent } from './route.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
	imports: [
		BreadcrumbModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	declarations: [RouteComponent],
	exports: [RouteComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppRouteModule { }