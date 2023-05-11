import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotions } from './promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  apiUrl = 'https://localhost:7051/api/promotions';

  constructor(private http: HttpClient) { }

  getAllPromotions(): Observable<Promotions[]> {
    return this.http.get<Promotions[]>(this.apiUrl);
  }


  getPromotionsById(id: number): Observable<Promotions> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Promotions>(url);
  }

  createPromotions(Brand: Promotions): Observable<Promotions> {
    const url = `${this.apiUrl}`;
    return this.http.post<Promotions>(url, Brand);
  }
}
