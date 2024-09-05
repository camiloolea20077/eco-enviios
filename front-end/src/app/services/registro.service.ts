import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registro } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'localhost:8080/auth/register';

  constructor(private http: HttpClient) {}

  getRegistros(): Observable<RegistroService[]> {
    return this.http.get<RegistroService[]>(this.apiUrl);
  }
  
  getRegistro(id: number): Observable<Registro> {
    return this.http.get<Registro>(`${this.apiUrl}/${id}`);
  }

  addRegistro(registro: Registro): Observable<Registro> {
    return this.http.post<Registro>(this.apiUrl, registro);
  }
}
