import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet , Navbar],
  templateUrl: './layout.html',
  styles: ``,
})
export class Layout {

}
