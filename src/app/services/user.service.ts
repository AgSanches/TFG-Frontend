import { Injectable } from '@angular/core';
import {url} from './variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient,
  ) {

  }

  register(user:User): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url + '/register', {
      "email": user.email,
      "password": user.password,
      "name" : user.name,
      "surname": user.surname
    }, {headers: headers});
  }


}
