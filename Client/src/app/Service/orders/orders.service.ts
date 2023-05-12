import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from './orders';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  apiUrl = 'https://localhost:7078/api/Orders  ';

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>(this.apiUrl);
  }


  getOrdersById(id: number): Observable<Orders> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Orders>(url);
  }
}
