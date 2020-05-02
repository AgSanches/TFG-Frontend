import { Injectable } from '@angular/core';
import {url} from './variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dog} from '../models/Dog';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DogsService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getDogs(): Observable<any>{
    return this.http.get(`${url}/dogs` ).pipe(map((dog:Dog) => {
      return dog;
    }));
  }

  getDogsByName(name:string): Observable<any>{
    return this.http.get(`${url}/dog/name/${name}`).pipe(map((dog:Dog) => {
      return dog;
    }));
  }

  createDog(dog: Dog): Observable<Dog>{
    return this.http.post(`${url}/dog`, {
      "name": dog.name, "bread" : dog.bread, "birth" : dog.birth, "gender" : dog.gender,
      "weight" : dog.weight, "height" : dog.height
    }).pipe(
      map((element: any) => {
        return element as Dog
      })
    );
  }

  uploadImage(id: number, file: File): Observable<any> {

    let formData:FormData = new FormData();
    formData.set('file', file);

    let headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');

    return this.http.post(`${url}/dog/image/${id}`, formData, {
      headers:headers
    })
  }

  getDog(id: number): Observable<Dog>{
    return this.http.get(`${url}/dog/${id}`).pipe(
      map((element: any) => {
        return element as Dog;
      }));
  }

  updateDog(dog:Dog): Observable<Dog>{
    return this.http.put(`${url}/dog/${dog.id}`, {
      "name": dog.name, "bread" : dog.bread, "birth" : dog.birth, "gender" : dog.gender,
      "weight" : dog.weight, "height" : dog.height
    }).pipe(map((dog: Dog) => {
      return dog;
    }))
  }

  deleteDog(id: number): Observable<any>{
    return this.http.delete(`${url}/dog/${id}`)
  }
}
