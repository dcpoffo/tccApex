import { MensagemService } from './mensagem.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Problema } from '../models/Problema';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProblemaService {

  baseURL = `${environment.mainUrlAPI}problema`;

  constructor(
    private http: HttpClient,
    private mensagemServico: MensagemService
  ) { }

  getAll(): Observable<Problema[]> {
    return this.http.get<Problema[]>(this.baseURL).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getById(id: number): Observable<Problema> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Problema>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  put(problema: Problema): Observable<Problema> {
    const url = `${this.baseURL}/${problema.id}`;
    return this.http.put<Problema>(url, problema).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  post(problema: Problema): Observable<Problema> {
    return this.http.post<Problema>(this.baseURL, problema).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Problema> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Problema>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.mensagemServico.showMessage('Ocorreu um erro com o módulo Problema!', true);
    return EMPTY;
  }

}
