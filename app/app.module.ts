import { LOCALE_ID, NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule, registerLocaleData } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';
import { AppTableModule } from './components/table/table.module';

export const route: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: '', loadChildren: () => import('@view/view.module').then((m) => m.ViewModule) },
	{ path: '**', redirectTo: '' },
];

registerLocaleData(localePt, 'pt-BR');

@NgModule({
	imports: [
		AppTableModule,
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(route, { preloadingStrategy: PreloadAllModules }),
	],
	declarations: [],
	providers: [
		{ provide: LOCALE_ID, useValue: 'pt-BR' },
		{ provide: APP_BASE_HREF, useValue: '/' },
	],
	exports: [RouterModule],
	schemas: [],
	bootstrap: [],
})

export class AppModule { }