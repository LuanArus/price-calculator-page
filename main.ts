import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_INITIALIZER, ErrorHandler, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { route } from './app/app.module';
import { providePrimeNG } from 'primeng/config';
import { ConfirmationService, MessageService } from 'primeng/api';

import Aura from '@primeng/themes/aura';
import { MainService } from '@controller/main.service';

export function initApp(mainService: MainService): () => void {
	return () => {
		mainService.loading.next(true);
	}
}

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(route),
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: Aura,
				options: {
					darkModeSelector: '.dark',
				},
			},
			translation: {
				dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
				dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
				dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
				monthNames: [
					"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
					"Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],
				monthNamesShort: [
					"Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
					"Jul", "Ago", "Set", "Out", "Nov", "Dez"
				],
				today: 'Hoje',
				clear: 'Limpar',
			}
		}),
		ConfirmationService,
		MessageService,
		{ provide: APP_INITIALIZER, useFactory: initApp, deps: [MainService], multi: true, },
	],
}).catch((err) => console.error(err));
