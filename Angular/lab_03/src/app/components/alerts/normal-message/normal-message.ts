import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-normal-message',
  imports: [],
  templateUrl: './normal-message.html',
  styleUrl: './normal-message.css',
})
export class NormalMessage {
  @Input() message!: String;
}
