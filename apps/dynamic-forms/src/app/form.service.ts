import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { JsonFormData } from './form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  // getForm(): Observable<JsonFormData> {
  //   return this.http
  //     .get<JsonFormData>('/assets/my-form.json')
  // }
}
