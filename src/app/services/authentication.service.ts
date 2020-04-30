import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {url} from './variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/User';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private headers: HttpHeaders;
  private currentUserSource: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.currentUserSource = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSource.asObservable();

    if (!this.isAuthenticated()){
      this.logout()
    }
  }

  login(email:string, password: string): Observable<any> {
    return this.http.post(url + '/login',
      {"email" : email, "password" : password },
      {headers: this.headers}).pipe(
        map((user:User) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        })
    );
  }

  logout(){
    this.currentUserSource.next(null);
    localStorage.clear();
  }

  getCurrentUser(): User {
    return this.currentUserSource.value;
  }

  isAuthenticated(): boolean {
    if (!this.currentUserSource.value){
      return false;
    }

    if(this.jwtHelperService.isTokenExpired(this.currentUserSource.value.access_token)){
      this.logout();
      return false;
    }

    return true;
  }
}
