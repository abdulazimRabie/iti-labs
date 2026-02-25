import { Component, inject } from '@angular/core';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/product.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styles: ``,
})
export class ProductDetails {

  router = inject(Router);

  productId = 1;
  product : Product | undefined;

  constructor(private route: ActivatedRoute){};

  ngOnInit() {
    console.log(this.route)
    this.productId = Number(this.route.snapshot.params['id']);
    this.product = PRODUCTS.find(p => p.id === this.productId);

    if (!this.product) {
      this.router.navigate(['/az/notfoundpage'])
    }
  }

  addToCart() {
    if (localStorage.getItem('cart'))
      localStorage.setItem('cart', `${localStorage.getItem('cart')},${this.product?.id}`)
    else
      localStorage.setItem('cart', `${this.product?.id}`)
  }

}
