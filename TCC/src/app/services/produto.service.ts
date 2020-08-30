import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseURL = `${environment.mainUrlAPI}produto`

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseURL);
  }

  put(produto: Produto) {
    return this.http.put(`${this.baseURL}/${produto.id}`, produto);
  }

  post(produto: Produto) {
    return this.http.post(this.baseURL, produto);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
