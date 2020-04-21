import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _url: string = "assets/data/products.json"
  constructor(private http: HttpClient) { }

  get():Observable<Products[]> {
    return this.http.get<Products[]>(this._url)
  }

  create(product): Observable<Products> {
    return this.http.post<Products>(this._url, product, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    })
  }
}
