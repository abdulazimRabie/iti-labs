import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warnning',
  imports: [],
  templateUrl: './warnning.html',
  styleUrl: './warnning.css',
})
export class Warnning {
  @Input() message! : string;
}
