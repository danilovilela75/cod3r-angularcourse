import { ProductsServiceService } from './../../services/products-service.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]

  constructor(
    private productService: ProductsServiceService
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}
