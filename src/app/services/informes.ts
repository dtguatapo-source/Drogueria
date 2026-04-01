import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InformesService {

  private url = 'assents/informes.json';
  constructor(private http: HttpClient) {}

  getInformes() {
    return this.http.get(this.url);
  }
}