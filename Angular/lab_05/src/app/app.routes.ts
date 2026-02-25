import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Products } from './components/products/products';
import { Layout } from './pages/layout/layout';
import { LoginPage } from './pages/login-page/login-page';
import { ProductDetails } from './components/product-details/product-details';
import { Notfound } from './components/notfound/notfound';
import { authGaurdGuard } from './gaurds/auth-gaurd-guard';
import { Cart } from './components/cart/cart';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "az",
    pathMatch: 'full'
  },
  {
    path: "az",
    component: Layout,
    title: "Welcome to az",
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: "home",
        title: "Welcome to az",
        component: Home
      },
      {
        path: "about",
        component: About,
        title: "About az"
      },
      {
        path: "products",
        component: Products,
        title: "Explore All Products in az"
      },
      {
        path: "products/:id",
        component: ProductDetails,
        canActivate: [authGaurdGuard]
      },
      {
        path: "cart",
        component: Cart,
        canActivate: [authGaurdGuard]
      }
    ]
  },
  {
    path: 'az/login',
    component: LoginPage,
    title: "az - Login"
  },
  {
    path: "**",
    redirectTo: 'az/notfoundpage',
    pathMatch: 'full'
  },
  {
    path: "az/notfoundpage",
    component: Notfound,
    title: 'az-not found page'
  }
];
