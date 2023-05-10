import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'https://localhost:7051/api/Category';

  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }


  getCategoryById(id: number): Observable<Category> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Category>(url);
  }
}
