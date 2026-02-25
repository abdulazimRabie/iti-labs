import { Component } from '@angular/core';
import { Login } from "../../components/login/login";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [Login, RouterLink],
  templateUrl: './login-page.html',
  styles: ``,
})
export class LoginPage {

}
