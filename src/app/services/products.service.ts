import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Pack ceramico 20 litros',
      image: 'assets/img/ceramico.png',
      price: 200
    },
    {
      id: 2,
      name: 'Pack dispensador pedestal',
      image: 'assets/img/pedestal.png',
      price: 300
    },
    {
      id: 3,
      name: 'Pack dispensador premiun',
      image: 'assets/img/premiun.png',
      price: 500
    },
  ];

  constructor() { }

  getProduct(): Product[]{
    return this.products;
  }
}

export interface Product{
  id: number;
  name: string;
  image: string;
  price: number;
}
