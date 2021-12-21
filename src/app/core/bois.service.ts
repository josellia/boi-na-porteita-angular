import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boi } from '../shared/models/boi';

const apiUrl = 'http://localhost:3000/cows/';

@Injectable({
  providedIn: 'root',
})
export class BoisService {
  constructor(private http: HttpClient) {}
  saveBoi(boi: Boi): Observable<Boi> {
    return this.http.post<Boi>(apiUrl, boi);
  }

  listar(
    page: number,
    qtdPage: number,
    breed: string,
    gender: string
  ): Observable<Boi[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('_page', page.toString());
    httpParams = httpParams.set('_limit', qtdPage);
    httpParams = httpParams.set('_sort', 'id' );
    httpParams = httpParams.set('_order', 'desc');
    breed ? (httpParams = httpParams.set('q', breed)) : '';
    gender ? (httpParams = httpParams.set('gender', gender)) : '';

    return this.http.get<Boi[]>(apiUrl, { params: httpParams });
  }
}
