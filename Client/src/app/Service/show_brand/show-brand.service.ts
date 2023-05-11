import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from './show-brand.interface';
@Injectable({
  providedIn: 'root'
})
export class ShowBrandService {
  apiUrl = 'https://localhost:7051/api/Brands';

  constructor(private http: HttpClient) { }

  getAllBrand(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apiUrl);
  }

  getBrandById(id: number): Observable<Brand> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Brand>(url);
  }

  createBrand(Brand: Brand): Observable<Brand> {
    const url = `${this.apiUrl}`;
    return this.http.post<Brand>(url, Brand);
  }

}
