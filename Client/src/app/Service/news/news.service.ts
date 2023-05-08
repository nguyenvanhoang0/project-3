import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // https://newsapi.org/
  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=736b9291bcb6476283d47c397c2a5bdc';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }

  getNewsById(id: number): Observable<News> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<News>(url);
  }
}
