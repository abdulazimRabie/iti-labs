import { Component, Input, SimpleChange } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.html',
  styles: ``,
})
export class Wishlist {
  @Input() product : Product | undefined;
  @Input() deleteFromWishList : number = -1 ; // id of the product
  wishlist : Product[] = [];

  ngOnChanges(changes: SimpleChange) {
    console.log("User liked : ", this.product);
    console.log("Changes to wish list inputs : ", changes);


    if (this.product && this.isNotExist(this.product.id)) {
        this.wishlist.push(this.product);
    }

    if (this.deleteFromWishList !== -1) {
      this.deleteProductFromWishlist(this.deleteFromWishList);
    }
  }

  isNotExist(product_id : number) : boolean{
    if (this.wishlist.length == 0) return true;

    for(let product of this.wishlist) {
      if (product.id == product_id) return false;
    }

    return true;
  }

  deleteProductFromWishlist(product_id: number) {
    this.wishlist = this.wishlist.filter(product => product.id !== product_id);
  }
}
