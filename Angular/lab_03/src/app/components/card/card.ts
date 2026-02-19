import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() product! : Product;
  @Input() product_idx! : number;
  @Output() deleteProductAt = new EventEmitter<number>();

  sendDeletedIndex() {
    this.deleteProductAt.emit(this.product_idx);
  }
}
