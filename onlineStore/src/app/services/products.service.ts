import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _url: string = "http://127.0.0.1:8000/api/products/"
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getProducts():Observable<Products[]> {
    return this.http.get<Products[]>(this._url)
  }
  getSortedProducts(category):Observable<Products[]> {
    return this.http.post<Products[]>(this._url + 'category/', {name: category}, this.httpOptions)
  }
  getProductById(id):Observable<Products> {
    return this.http.get<Products>(this._url + id + '/')
  }

  create(product): Observable<Products> {
    return this.http.post<Products>(this._url + 'admin/', product, this.httpOptions)
  }
  update(product): Observable<Products> {
    return this.http.put<Products>(this._url + 'admin/', product, this.httpOptions)
  }
  delete(id): Observable<any> {
    return this.http.delete<any>(this._url + 'admin/' + id + '/')
  }
}
