import { CUSTOM_ELEMENTS_SCHEMA, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FieldComponent } from './field.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { PasswordModule } from 'primeng/password';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { MultiSelectModule } from 'primeng/multiselect';
import { HttpClientModule } from '@angular/common/http';
import { AppButtonModule } from '../button/button.module';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ColorPickerModule } from 'primeng/colorpicker';
import { SliderModule } from 'primeng/slider';
import { AppBlockUiModule } from '../blockui/blockui.module';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { EditorModule } from 'primeng/editor';

@NgModule({
	imports: [
		AppBlockUiModule,
		AppButtonModule,
		AutoCompleteModule,
		ColorPickerModule,
		CommonModule,
		DatePickerModule,
		EditorModule,
		FloatLabelModule,
		FormsModule,
		HttpClientModule,
		IconFieldModule,
		InputIconModule,
		InputNumberModule,
		InputTextModule,
		MultiSelectModule,
		PanelModule,
		PasswordModule,
		ReactiveFormsModule,
		SelectModule,
		SliderModule,
		ToggleSwitchModule,
	],
	providers: [],
	declarations: [FieldComponent],
	exports: [FieldComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppFieldModule { }