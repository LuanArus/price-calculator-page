import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './topbar.component';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AppRouteModule } from '../route/route.module';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AppFieldModule } from '../field/field.module';
import { AppButtonModule } from '../button/button.module';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
	imports: [
		AutoCompleteModule,
		AppFieldModule,
		AppRouteModule,
		AppButtonModule,
		ButtonModule,
		CommonModule,
		DrawerModule,
		FormsModule,
		IconFieldModule,
		InputIconModule,
		InputTextModule,
		ReactiveFormsModule,
		SelectButtonModule,
		TooltipModule,
		// TranslateModule,
	],
	providers: [],
	declarations: [TopBarComponent],
	exports: [TopBarComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppTopbarModule { }