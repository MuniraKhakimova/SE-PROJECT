import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private httpHeaders = {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }
  private _url = 'django'

  constructor(private http: HttpClient) { }

  login(user): Observable<User> {
    return this.http.post<User>(this._url+'login', user, this.httpHeaders)
  }
  signup(user): Observable<User> {
    return this.http.post<User>(this._url+'register', user, this.httpHeaders)
  }
  order(user): Observable<User> {
    return this.http.post<User>(this._url+'order', user, this.httpHeaders)
  }
}
