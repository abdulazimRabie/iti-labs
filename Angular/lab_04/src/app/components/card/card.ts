import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styles: ``,
})
export class Card {
  @Input() product: Product | undefined;
  @Output() deleteProduct_e = new EventEmitter<number>();
  @Output() updateProduct_e = new EventEmitter<number>();
  @Output() loveProduct_e = new EventEmitter<Product>();

  deleteProduct() {
    if (this.product)
      this.deleteProduct_e.emit(this.product.id)
  }

  updateProduct() {
    if (this.product)
      this.updateProduct_e.emit(this.product.id)
  }

  loveProduct() {
    if (this.product)
      this.loveProduct_e.emit(this.product)
  }
}
