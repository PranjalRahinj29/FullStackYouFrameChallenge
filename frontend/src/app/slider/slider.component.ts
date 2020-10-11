import { Component, OnInit, SecurityContext, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('move', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => left', [
        style({ transform: 'translateX(100%)' }),
        animate(200)
      ]),
      transition('left => void', [
        animate(200, style({ transform: 'translateX(0)' }))
      ]),
      transition('void => right', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('right => void', [
        animate(200, style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class SliderComponent implements OnInit {

  images = [];

  public safeUrls = [];
  public imageUrls: any;
  public state = 'void';
  public disableSliderButtons = false;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {

    this.images = [
      '/assets/images/apple_mobile.jpeg', 
      '/assets/images/bb.jpg', 
      '/assets/images/electronic1.jpg',
      '/assets/images/electronic2.jpg',
      '/assets/images/apple_laptop.jpeg'
      // '/assets/abc.jpg'
    ];

    this.images.forEach(element => {
      const safeUrl = this.sanitizer.sanitize(SecurityContext.URL, element);
      this.safeUrls.push(safeUrl);
    });

    this.imageUrls = this.safeUrls;
  }

  onUpload(event) {
    this.imageUrls.unshift('/assets/abc.jpg');
    console.log(this.imageUrls);
  }

  imageRotate(arr, reverse) {
    if (reverse) {
      arr.unshift(arr.pop());
    } else {
      arr.push(arr.shift());
    }
    return arr;
  }

  moveLeft() {
    if (this.disableSliderButtons) {
      return;
    }
    this.state = 'right';
    this.imageRotate(this.imageUrls, true);
  }

  moveRight() {
    if (this.disableSliderButtons) {
      return;
    }
    this.state = 'left';
    this.imageRotate(this.imageUrls, false);
  }

  onFinish($event) {
    this.state = 'void';
    this.disableSliderButtons = false;
  }

  onStart($event) {
    this.disableSliderButtons = true;
  }
}