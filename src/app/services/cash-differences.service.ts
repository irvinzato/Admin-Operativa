import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { PagesCashDifference } from '../shared/models/cashDifference.interface';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CashDifferencesService {

  constructor( private http: HttpClient ) { }

  public getCashDifference( page: string, size: string, initialDate: string = '01/01/2022', finalDate: string = '20/06/2022', brandId: string = '', branchId: string = '', routeId: string = '' ): Observable<PagesCashDifference> { 
    if( initialDate === '' || initialDate === undefined ) {
      initialDate = '01/01/2022';
    }
    if( finalDate === '' || finalDate === undefined ) {
      finalDate = '20/06/2022';
    }
    let myRequest = `${environment.urlExperienceAPI}v1/cashDifferences?dateFrom=${initialDate}&dateTo=${finalDate}&brandId=${brandId}&branchId=${branchId}&routeId=${routeId}&page=${page}&size=${size}`;
    return this.http.get<PagesCashDifference>(myRequest)
           .pipe(
            map( res => {
              return res;
            }),
            catchError( error => {
              Swal.fire({
                icon: 'error',
                title: `Ops...`,
                text: 'No hay resultados con tu configuración'
              });
              return throwError('Error en peticion');
            })
           );
  }

}
