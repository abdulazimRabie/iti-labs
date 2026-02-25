import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { PRODUCTS } from '../../data/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styles: ``,
})
export class Cart {
  products : Product[] | undefined = [];

  ngOnInit() {
    if (localStorage.getItem('cart')){
      let value : any =
      [...new Set(localStorage.getItem('cart')?.split(','))]
      .map(id => PRODUCTS.find(p => p.id == Number(id)));

      if (value.length)
        this.products = value;
    }

    console.log(this.products);

  }

  getTotal(): number {
    return this.products?.reduce((sum, p) => sum + p.price, 0) ?? 0;
  }

  removeFromCart(pId : number) {
    this.products = this.products?.filter(p => p.id != pId);

    let updatedCart = this.products?.reduce((prev : number[], curr : Product) => {
      prev.push(curr.id);
      return prev;
    }, []).join(',');

    localStorage.setItem('cart', updatedCart ? updatedCart : '');
  }
}
