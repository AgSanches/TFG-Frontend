import { Injectable } from '@angular/core';
import {url} from './variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {Dog} from '../models/Dog';
import {first, map} from 'rxjs/operators';
import {DogObservation} from '../models/DogObservation';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getDogs(): Observable<any>{
    return this.http.get(url + `/dogs` ).pipe(map((dog:Dog) => {
      return dog;
    }));
  }

  getDogsByName(name:string): Observable<any>{
    return this.http.get(url + "/dog/name/" + name).pipe(map((dog:Dog) => {
      return dog;
    }));
  }

  createDog(dog: Dog): Observable<Dog>{
    return this.http.post(url + "/dog", {
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

    return this.http.post(url + `/dog/image/${id}`, formData, {
      headers:headers
    })
  }

  getDog(id: number): Observable<Dog>{
    return this.http.get(url + `/dog/${id}`).pipe(
      map((element: any) => {
        return element as Dog;
      }));
  }

  updateDog(){
    // TODO
  }

  deleteDog(id: number): Observable<any>{
    return this.http.delete(`${url}/dog/${id}`)
  }
}
