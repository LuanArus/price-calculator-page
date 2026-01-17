import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftMenuComponent } from './leftmenu.component';
import { AppLeftSubMenuModule } from './leftsubmenu/leftsubmenu.module';

@NgModule({
	imports: [
		AppLeftSubMenuModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [LeftMenuComponent],
	exports: [LeftMenuComponent],
})

export class AppLeftMenuModule { }