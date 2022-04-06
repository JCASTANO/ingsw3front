import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private notification: MatSnackBar,
    private zone: NgZone
  ) {}

  handleError(error: any) {

    console.error('Error from global error handler', error);

    if (error instanceof HttpErrorResponse) {
        error = error.error!.mensaje || error.statusText;
      } else {
          error = 'Error de js ' + error;
      }

    this.zone.run(() =>
    this.notification.open(
        error
      )
    );
  }
}