import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boi } from '../shared/models/boi';

const apiUrl = 'http://localhost:3000/cows/';

@Injectable({
  providedIn: 'root'
})
export class BoisService {

  constructor(private http: HttpClient) { }
  saveBoi(boi:Boi):Observable<Boi>{
    return this.http.post<Boi>(apiUrl, boi)
  }

  listar():Observable<Boi[]>{
    return this.http.get<Boi[]>(apiUrl);
  }
}
