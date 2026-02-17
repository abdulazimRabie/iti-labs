import { Component , ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-slide',
  imports: [],
  templateUrl: './slide.html',
  styleUrl: './slide.css',
})
export class Slide {
  images : string[] = ['/images/male.svg', '/images/fmale.svg', '/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg'];
  curr_img : number = 1;
  interval : any = null;

  next() {
    if (this.curr_img >= this.images.length - 1) this.curr_img = 0;
    else this.curr_img++;
  }

  prev() {
    if (this.curr_img <= 0) this.curr_img = this.images.length - 1;
    else this.curr_img--;
  }

  slide() {
    console.log("Slideer is working ")
    if (this.interval) return;

    this.interval = setInterval(() => {
      this.next();
    }, 500);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }
}
