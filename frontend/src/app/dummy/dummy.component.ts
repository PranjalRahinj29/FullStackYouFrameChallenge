import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  imageUrls: Array<String>;

  constructor() {
  }

  onUpload(event) {
    this.imageUrls.unshift('/assets/abc.jpg');
    //just added console.log which will display the event details in browser on click of the button.
    //alert("Button is clicked");
    //this.ngOnInit()
    console.log(this.imageUrls);
  }

  ngOnInit() {
    this.imageUrls = [
      '/assets/apple_mobile.jpeg', 
      '/assets/bb.jpg', 
      '/assets/PranjalPhoto_1.jpg',
      '/assets/SemiformalResume_pic.jpg',
      '/assets/apple_laptop.jpeg'
      // '/assets/abc.jpg'
    ];
  }
}