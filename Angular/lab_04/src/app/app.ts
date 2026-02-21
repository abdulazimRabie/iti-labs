import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./components/nav/nav";
import { Product } from '../models/product.model';
import { Fields } from "./components/fields/fields";
import { ProductRepo } from "./components/product-repo/product-repo";
import { Wishlist } from "./components/wishlist/wishlist";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Fields, ProductRepo, Wishlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab_04');
  product: Product | undefined;
  wishProduct: Product | undefined;
  modified_product : Product | undefined;
  removed_product_from_wishlist : number = -1;

  recieveNewProduct(e : Product) {
    this.product = e;
    console.log("Data has been send to Parent : ", e);
  }

  sendModifyToFeild(e : Product) {
    this.modified_product = e;
  }

  receiveWishedProduct(e : Product) {
    this.wishProduct = e;
  }

  updateWishList(e : number) {
    this.removed_product_from_wishlist = e;
  }
}
