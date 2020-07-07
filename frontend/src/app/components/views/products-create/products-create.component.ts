import { ProductsServiceService } from './../../services/products-service.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private router: Router,
    private productService: ProductsServiceService
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

}
