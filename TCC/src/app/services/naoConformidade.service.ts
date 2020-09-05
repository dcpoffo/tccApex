import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { NaoConformidade } from '../models/NaoConformidade';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NaoConformidadeService {

  baseURL = `${environment.mainUrlAPI}naoConformidade`;

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  getAll(): Observable<NaoConformidade[]> {
    return this.http.get<NaoConformidade[]>(this.baseURL).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getById(id: number): Observable<NaoConformidade> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<NaoConformidade>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  put(naoConformidade: NaoConformidade): Observable<NaoConformidade> {
    const url = `${this.baseURL}/${naoConformidade.id}`;
    return this.http.put<NaoConformidade>(url, naoConformidade).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  post(naoConformidade: NaoConformidade): Observable<NaoConformidade> {
    return this.http.post<NaoConformidade>(this.baseURL, naoConformidade).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<NaoConformidade> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<NaoConformidade>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro com o módulo Não Conformidade!', true);
    return EMPTY;
  }
}
