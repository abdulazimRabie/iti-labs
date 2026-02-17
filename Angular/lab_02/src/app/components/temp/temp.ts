import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  imports: [],
  templateUrl: './temp.html',
  styleUrl: './temp.css',
})
export class Temp {
  celsius_val : number = 0;
  fahern_val : number = 32;

  convertToFahernheit(e : Event) {
    const input = e.target as HTMLInputElement;
    this.celsius_val = Number(input.value);
    this.toFahern();
  }

  toFahern() {
    this.fahern_val = (this.celsius_val * (9/5)) + 32;
  }

}
