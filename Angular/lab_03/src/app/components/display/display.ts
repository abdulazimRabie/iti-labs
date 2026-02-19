import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { Card } from '../card/card';

@Component({
  selector: 'app-display',
  imports: [Card],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {
  @Input() products! : Product[];

  deleteProduct(e : number) {
    this.products.splice(e,1);
  }

}
