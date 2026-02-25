import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.html',
  styles: ``,
})
export class Login {

  router = inject(Router);

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  }
  )


  handleSubmit(form : FormGroup) {
    console.log(form);
    localStorage.setItem('username', form.value['username']);
    localStorage.setItem('password', form.value['password']);
    if (localStorage.getItem('closedPathParam')) {
        this.router.navigate(['/az/products/', localStorage.getItem('closedPathParam')]);
        localStorage.removeItem('closedPathParam');
    } else {
      this.router.navigate(['/az/products']);
    }
  }
}
