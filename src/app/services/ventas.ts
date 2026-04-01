import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VentasService {

  private url = 'assents/ventas.json';
  constructor(private http: HttpClient) {}

  getVentas() {
    return this.http.get(this.url);
  }
}
