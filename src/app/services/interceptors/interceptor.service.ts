import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Error } from '../../shared/models/error.interface';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    if (req.url.includes('assets')  || req.url.includes('login') || req.url.includes('sign-up')  || req.url.includes('/account/confirm') || req.url.includes('account/password/reset' ) || req.url.includes('amazonaws') ) {
      return next.handle(req); 
    }
    const bearerToken = localStorage.getItem('token');
    // Add header with the token
    const reqClone = req.clone({
      
      setHeaders: { Authorization: `Bearer ${bearerToken} ` } //${this.authService.getToken()}
    });
   
    return next.handle(reqClone).pipe( // we sent new request with token in header
      catchError(err => this.handleError(err)) // if there is an error then send it to handleError , this.authService
    );
  }

    // This function is executed every time an http request fails.
    private handleError(error: HttpErrorResponse ): Observable<any> { // we recive http error   , authService: AuthService
      const errorEntity: Error = { // we build custom error with error status and message
        ok: false,
        status: error.error.status,
        message: error.error.message
      };
      console.log(' ha ocurrido un error: ', errorEntity);
      if ( errorEntity.status === 4010 || errorEntity.status === 4030) {
        Swal.fire({ // we display dialog of session error
          icon: 'info',
          title: 'La sesión ha expirado',
          text: 'Por favor vuelva a iniciar sesión.', 
          confirmButtonText: 'Confirmar', 
          confirmButtonColor: '#2E643B'
        }).then(() => console.log('logout')); //  authService.logout()
      } else {
        var strTitle: string = 'Se ha presentado un error';
        var strText: string = 'Intenta más tarde, Si persiste el error contacta con el administrador.';
        switch (errorEntity.status) {
          case 401:
            strTitle = 'Es posible que tu sesión expiró o no tienes permisos ';
            strText = 'Vuelve a firmarte en la aplicación e intenta de nuevo, si el problema persiste, por favor contacta con el administrador.';
            break;
          case 404:  // not found
            strTitle = 'No fue encontrada tu búsqueda';
            strText = 'Intenta de nuevo con otros valores.';
            break;
        }
        
        Swal.fire({
          icon: 'error', // type of message
          title: strTitle,
          text: strText,   
          showCloseButton: false,
          showCancelButton: true,
          cancelButtonText: 'Cerrar',
          cancelButtonColor: '#CF4942',          
          showConfirmButton: true,
          confirmButtonText: 'Ver detalles técnicos del error',
          confirmButtonColor: '#518ED5',
          showDenyButton: false,
        }).then((swalResult) => {
          if (swalResult.value) {
            Swal.fire({ // we display dialog of error
              icon: 'error',
              html: "<h1><span><b>Error " + errorEntity.status + "</b></span></h1><h2><span> Mensaje original del error: " + errorEntity.message + " <br>  <br> <br>  </span></h2>",
            });
          }
        });

      }
      return throwError(errorEntity); // we return build error object
    }
}
