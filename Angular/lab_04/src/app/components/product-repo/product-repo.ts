import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../../models/product.model';
import { Card } from '../card/card';

@Component({
  selector: 'app-product-repo',
  imports: [Card],
  templateUrl: './product-repo.html',
  styles: ``,
})
export class ProductRepo implements OnChanges{
  @Input() new_product : Product | undefined;
  @Output() modify_product = new EventEmitter<Product>();
  @Output() loved_product = new EventEmitter<Product>();
  @Output() remove_from_wishlist = new EventEmitter<number>();


  products_list : Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Input has been changed", this.new_product);
    // if (changes['new_product'].firstChange) {}
    if (this.new_product) {
      this.products_list.push(this.new_product)
    }
  }

  deletProduct(id: number) {
    for(let i = 0; i < this.products_list.length; i++) {
      if (this.products_list[i].id == id) {
        this.remove_from_wishlist.emit(this.products_list[i].id)
        this.products_list.splice(i, 1);
        return;
      }
    }
  }

  updateProduct(id: number) {
    for(let i = 0; i < this.products_list.length; i++) {
      if (this.products_list[i].id == id) {
        this.remove_from_wishlist.emit(this.products_list[i].id)
        this.modify_product.emit(this.products_list[i]);
        this.products_list.splice(i, 1);
        return;
      }
    }
  }

  loveProduct(e: Product) {
    this.loved_product.emit(e);
  }


}
