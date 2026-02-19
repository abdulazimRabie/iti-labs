import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataField } from './components/data-field/data-field';
import { Product } from './models/product.model';
import { Display } from "./components/display/display";
import {Notifications} from "./components/notifications/notifications"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataField, Display, Notifications],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab_03');
  products: Product[] = [];

  recieveProduct(product: Product) {
    this.products.push(product);
    console.log(this.products);
  }
}
