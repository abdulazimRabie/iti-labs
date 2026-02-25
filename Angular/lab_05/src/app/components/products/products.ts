import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from "../../models/product.model"
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product-card/product-card';


@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styles: ``,
})
export class Products {
  products = PRODUCTS;

}
