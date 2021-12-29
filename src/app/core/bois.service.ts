import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boi } from '../shared/models/boi';
import { ConfigParams } from '../shared/models/config-params';
import { ConfigParamsService } from './config-params.service';

const apiUrl = 'http://localhost:3000/cows/';

@Injectable({
  providedIn: 'root',
})
export class BoisService {
  constructor(
    private http: HttpClient,
    public configParamsService: ConfigParamsService
  ) {}
  saveBoi(boi: Boi): Observable<Boi> {
    return this.http.post<Boi>(apiUrl, boi);
  }

 editBoi(boi: Boi): Observable<Boi> {
    return this.http.put<Boi>(apiUrl + boi.id, boi);
  }
  listar(config: ConfigParams): Observable<Boi[]> {
    const configParams = this.configParamsService.configParams(config);

    return this.http.get<Boi[]>(apiUrl, { params: configParams });
  }

  viewCown(id: number): Observable<Boi>{
    return this.http.get<Boi>(apiUrl + id);
  }

  // Does not return anything, it will delete, there are no more records to show
  delCown(id: number): Observable<void>{
    return this.http.delete<void>(apiUrl + id);
  }
}
