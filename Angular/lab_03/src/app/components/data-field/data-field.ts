import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { Success } from "../alerts/success/success";
import { Error } from "../alerts/error/error";

@Component({
  selector: 'app-data-field',
  imports: [FormsModule, Success, Error],
  templateUrl: './data-field.html',
  styleUrl: './data-field.css',
})
export class DataField {
  @Output() newProduct = new EventEmitter<Product>();
  productName = '';
  productPrice = 0;

  status = '';

  addNewProduct(e : Event) {
    const input = e.target as HTMLInputElement;
    if (this.productName && this.productPrice > 0) {
     this.newProduct.emit({name: this.productName, price: this.productPrice});

     this.status = "success";
     setTimeout(() => {this.status = '';}, 2000);
    } else {
      this.status = "fail";
      setTimeout(() => {this.status = '';}, 2000);
    }

  }
}
