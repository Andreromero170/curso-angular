import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
//interface
// import { Product } from '../../modelo/productos.model';
import { NgFor, NgIf } from '@angular/common';
import { Product } from '../../modelo/productos-clase.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink,NgFor, NgIf],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  // interface
  // products: Product[] = [
  //   { id: 1, name: 'Laptop', price: 1200, inStock: true },
  //   { id: 2, name: 'Mouse', price: 25, inStock: false },
  //   { id: 3, name: 'Monitor', price: 300, inStock: true }
  // ];

  //class
  products: Product[] = [
    new Product(1, 'Laptop', 1200, true),
    new Product(2, 'Mouse', 25, false),
    new Product(3, 'Monitor', 300, true)
  ];
}

