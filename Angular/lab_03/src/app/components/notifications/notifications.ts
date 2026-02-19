import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Success } from '../alerts/success/success';
import { Error } from '../alerts/error/error';
import { FormsModule } from '@angular/forms';
import { Warnning } from "../alerts/warnning/warnning";
import { NormalMessage } from "../alerts/normal-message/normal-message";

@Component({
  selector: 'app-notifications',
  imports: [FormsModule, Success, Error, Warnning, NormalMessage],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  @ViewChild('notiCenterDisplay', {read: ViewContainerRef}) container! : ViewContainerRef;

  msgValue = "HI";
  status = "";

  success() {
    this.status = "";
    this.status = "success";
    this.container.createComponent(Success).setInput("message", this.msgValue);
  }

  error() {
    this.status = ""
    this.status = "error"
    this.container.createComponent(Error).setInput('message', this.msgValue);
  }

  warnning() {
    this.status = ""
    this.status = "warnning"
    this.container.createComponent(Warnning).setInput('message', this.msgValue);
  }

  messageNormal() {
    this.status = ""
    this.status = "normal"
    this.container.createComponent(NormalMessage).setInput('message', this.msgValue);
  }
}
