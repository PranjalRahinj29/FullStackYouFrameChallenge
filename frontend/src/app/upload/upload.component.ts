import { Component, OnInit, SecurityContext, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
    animate,
    state,
    style,
    transition,
    trigger,
    keyframes
} from '@angular/animations';
import { UploadService } from './upload.service';
import { Router } from '@angular/router';

const image_base_url: string = "http://localhost:4000";

class ImageSnippet {
    pending: boolean = false;
    status: string = 'init';

    constructor(public src: string, public file: File) { }
}

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css'],
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
export class UploadComponent implements OnInit {

    images: any = [];
    selectedFile: ImageSnippet;

    public safeUrls = [];
    public imageUrls: any;
    public state = 'void';
    public disableSliderButtons = false;

    service: UploadService;

    constructor(private sanitizer: DomSanitizer, service: UploadService, private router: Router) {
        this.service = service
        this.getAllImageUrls();
    }

    getAllImageUrls() {
        this.service.get()
            .subscribe(response => {
                this.images = response;
                this.ngOnInit();
            })
    }

    ngOnInit() {
        this.images = this.images.map(image => {
            return image_base_url + image;
        })
        this.images.forEach(element => {
            const safeUrl = this.sanitizer.sanitize(SecurityContext.URL, element);
            this.safeUrls.push(safeUrl);
        });

        this.imageUrls = this.safeUrls;
    }

    private onSuccess(fileName) {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'ok';
        this.imageUrls.unshift(image_base_url + fileName);
    }

    private onError() {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'fail';
        this.selectedFile.src = '';
    }

    processFile(imageInput: any) {
        const file: File = imageInput.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', (event: any) => {
            this.selectedFile = new ImageSnippet(event.target.result, file);

            this.selectedFile.pending = true;
            this.service.uploadImage(this.selectedFile.file).subscribe(
                (res) => {

                    this.onSuccess(res.fileName);
                },
                (err) => {
                    this.onError();
                })
        });

        reader.readAsDataURL(file);
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