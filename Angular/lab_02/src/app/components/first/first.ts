import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
  name : string = 'Name is here';

  changeName(e : Event) {
    const input = e.target as HTMLInputElement;
    this.name  = input.value;
  }

  resetName() {
    this.name = '';
  }
}
