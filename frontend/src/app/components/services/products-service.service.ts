import { Product } from './../models/products.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  baseURL = "http://localhost:8000/products"

  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
      this.snackbar.open(msg, 'x', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product)
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL)
  }

}
