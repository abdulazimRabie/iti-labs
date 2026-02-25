import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { Login } from "./components/login/login";
import { Products } from "./components/products/products";
import { ProductDetails } from "./components/product-details/product-details";
import { Cart } from "./components/cart/cart";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, Login, Products, ProductDetails, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab_05');
}
