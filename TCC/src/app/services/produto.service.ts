import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseURL = `${environment.mainUrlAPI}produto`

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseURL);
  }

  put(produto: Produto) {
    return this.http.put(`${this.baseURL}/${produto.id}`, produto);
  }

  post(produto: Produto) {
    return this.http.post(this.baseURL, produto);
  }

  delete(produto: Produto) {
    return this.http.delete(`${this.baseURL}/${produto.id}`);
  }

}
