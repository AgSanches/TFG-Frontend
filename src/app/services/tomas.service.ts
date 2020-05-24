import { Injectable } from '@angular/core';
import { url } from './variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Toma} from '../models/Toma';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TomasService {

  constructor(
    private http: HttpClient
  ) {

  }

  getTomasByName(id: number, name: string): Observable<Toma[]> {
    return this.http.get(`${url}/dog/toma/${id}/${name}`).pipe(
      map((tomas:any) => tomas.tomas ),
      map((tomas:Toma[]) => {
        return tomas.map((toma:Toma) => {
          return toma;
        })
      })
    )
  }

  createToma(toma: Toma): Observable<Toma>{
    return this.http.post(`${url}/dog/toma/manage`, {
      name: toma.name,
      session_id: toma.session_id
    }).pipe(
      map((data: Toma) => data)
    );
  }

  uploadSensor(tomaId: number, sensorFront: File, sensorBack: File, upperFootSensor:File, lowerFootSensor:File){
    const formData:FormData = new FormData();
    const headers = new HttpHeaders();

    if (sensorFront){
      formData.set('sensor_data_front', sensorFront);
    }

    if (sensorBack) {
      formData.set('sensor_data_back', sensorBack);
    }

    if (upperFootSensor){
      formData.set('sensor_data_foot_upper', upperFootSensor);
    }

    if (lowerFootSensor) {
      formData.set('sensor_data_foot_lower', lowerFootSensor);
    }

    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post<Toma>(`${url}/dog/toma/sensor/upload/${tomaId}`, formData, {headers})
  }

  uploadVideo(tomaId: number, videoFront: File, videoMiddle:File ,videoBack: File){
    const formData:FormData = new FormData();
    const headers = new HttpHeaders();

    if (videoFront){
      formData.set('video_front', videoFront);
    }
    if (videoMiddle) {
      formData.set('video_middle', videoMiddle);
    }
    if (videoBack) {
      formData.set('video_back', videoBack);
    }

    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post<Toma>(`${url}/dog/toma/video/upload/${tomaId}`, formData, {headers})
  }

  getToma(id:number): Observable<Toma> {
    return this.http.get(`${url}/dog/toma/${id}`).pipe(
      map((toma: Toma) => toma )
    )
  }

  readSensor(id:number): Observable<any> {
    return this.http.get(`${url}/dog/toma/sensor/${id}`)
  }

  updateToma(toma: Toma, id: number): Observable<Toma> {
    return this.http.put<Toma>(`${url}/dog/toma/${id}`, {
      name: toma.name
    })
  }
}
