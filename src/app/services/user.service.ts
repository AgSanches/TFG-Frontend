import { Injectable } from '@angular/core';
import {url} from './variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
  ) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  register(user:User): Observable<any> {
    return this.http.post(url + '/register', {
      "email": user.email,
      "password": user.password,
      "name" : user.name,
      "surname": user.surname
    }, {headers: this.headers});
  }

  getUsers(): Observable<User[]> {
    return this.http.get(`${url}/users`).pipe(
      map((users:User[]) => {
        return users.map(user => {
          return user as User;
        })
      })
    )
  }


}
