// import { Injectable } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Brand } from './show-brand.interface';
// @Injectable({
//   providedIn: 'root'
// })
// export class ShowBrandService {
//   apiUrl = 'https://api.aviationstack.com/v1/airlines';

//   constructor(private http: HttpClient) { }

//   getAllProducts(): Observable<Brand[]> {
//     return this.http.get<Brand[]>(this.apiUrl);
//   }


//   getProductById(id: number): Observable<Brand> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.get<Brand>(url);
//   }
// }
