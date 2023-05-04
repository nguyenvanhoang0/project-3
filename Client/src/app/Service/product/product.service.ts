import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.interface'

@Injectable({
  providedIn: 'root'
})
// export class ProductService {
//   private apiUrl = 'https://fakestoreapi.com/products';

//   constructor(private http: HttpClient) {}

//   addProduct(product: Product, files: File[]): Promise<Product> {
//     const formData = new FormData();
//     for (const file of files) {
//       formData.append('images', file, file.name);
//     }
//     formData.append('name', product.title);
//     formData.append('price', product.price.toString());
//     formData.append('description', product.description);
  
//     return this.http.post<Product>(this.apiUrl, formData).toPromise()
//       .then(response => {
//         if (response) {
//           return response;
//         } else {
//           throw new Error('Product not created');
//         }
//       })
//       .catch(error => {
//         throw new Error('Error creating product');
//       });

  
// }
// }

export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  
}