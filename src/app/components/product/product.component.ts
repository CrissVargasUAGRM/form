import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product[] = [];

  constructor(
    private ProductServices: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.product = this.ProductServices.getProduct();
    console.log(this.product);
  }

  buy( id: number ): any{
    console.log(id);
    this.router.navigate(['/form', id]);
  }
}
