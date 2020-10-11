import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
    selector: 'app-upload',
    templateUrl: 'upload.component.html',
    styleUrls: ['/upload.component.css']
})


export class UploadComponent implements OnInit {
    ImagePath: string;

    imageObject: Array<object> = [{
        image: '/assets/abc.jpg',
        thumbImage: '/assets/abc.jpg'
        //,alt: '1', // optional
        //title: '1' //optional
    }, {
        image: '/assets/apple_laptop.jpeg',
        thumbImage: '/assets/apple_laptop.jpeg'
    }, {
        image: '/assets/apple_mobile.jpeg',
        thumbImage: '/assets/apple_mobile.jpeg'
    }, {
        image: '/assets/bb.jpg',
        thumbImage: '/assets/bb.jpg'
    }, {
        image: '/assets/PranjalPhoto_1.jpg',
        thumbImage: '/assets/PranjalPhoto_1.jpg'
    }, {
        image: '/assets/SemiformalResume_pic.jpg',
        thumbImage: '/assets/SemiformalResume_pic.jpg'
    }
    ];

    imageSize: Object = { width: 500, height: 400, space: 10 };

    constructor() {
        this.ImagePath = '/assets/apple_laptop.jpeg'
    }

    ngOnInit() { }
}

