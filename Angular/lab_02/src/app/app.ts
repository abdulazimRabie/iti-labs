import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppName } from './components/app-name/app-name';
import { First } from './components/first/first';
import { Slide } from "./components/slide/slide";
import { Temp } from "./components/temp/temp";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, First, Slide, Temp, AppName],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab_02');
}
