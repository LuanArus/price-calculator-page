import { ErrorHandler, Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorInteceptor implements ErrorHandler {
    constructor(protected confirmationService: ConfirmationService) { }

    handleError(error: TypeError): void {

        if (!error?.message?.includes('ExpressionChangedAfterItHasBeenCheckedError')) {
            setTimeout(() => {
                if (!(error instanceof HttpErrorResponse)) {
                    this.confirmationService?.confirm({
                        message: error?.message,
                        header: 'Error',
                        key: 'app-confirmation',
                        icon: 'fas fa-bug',
                        acceptLabel: 'Ok',
                        acceptIcon: 'fas fa-check',
                        acceptButtonStyleClass: 'p-button-rounded p-button-primary',
                        rejectVisible: false,
                        dismissableMask: false,
                        closeOnEscape: false,
                        closable: false,
                        accept: () => {
                            console.log(error);
                       },
                    });
                }
            }, 100);
        }

        throwError(error);
    }
}
