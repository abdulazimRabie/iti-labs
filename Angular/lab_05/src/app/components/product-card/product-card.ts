import { Component, inject, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styles: ``,
})
export class ProductCard {
  @Input() product !: Product;
  authService = inject(AuthService);
  router = inject(Router);

  addToCard() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/az/login']);
      return;
    }

    if (localStorage.getItem('cart'))
      localStorage.setItem('cart', `${localStorage.getItem('cart')},${this.product.id}`)
    else
      localStorage.setItem('cart', `${this.product.id}`)
  }

  goToProductDetails(id: number) {

  }
}
