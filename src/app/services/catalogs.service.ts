import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { Brands, Branches, Routes } from './../shared/models/catalogs.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {

  constructor( private http: HttpClient ) { }

  public getRoutes(): Observable<Routes> {
    let myRequest = `${environment.urlExperienceAPI}v1/netsuiteRoutes`;
    return this.http.get<Routes>(myRequest);
  }

  public getBrands(): Observable<Brands> {
    let myRequest = `${environment.urlExperienceAPI}v1/netsuiteBrands`;
    return this.http.get<Brands>(myRequest);
  }

  public getBranches(brandId: number): Observable<Branches> {
    let myRequest = `${environment.urlExperienceAPI}v1/netsuiteBranches?brandId=${brandId}`;
    return this.http.get<Branches>(myRequest);
  }

}
