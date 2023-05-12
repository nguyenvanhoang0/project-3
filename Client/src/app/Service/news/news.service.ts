import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // https://newsapi.org/
  private apiUrl = 'https://localhost:7078/api/News';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }

  getNewsById(id: number): Observable<News> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<News>(url);
  }

  createNews(Brand: News): Observable<News> {
    const url = `${this.apiUrl}`;
    return this.http.post<News>(url, Brand);
  }
}
