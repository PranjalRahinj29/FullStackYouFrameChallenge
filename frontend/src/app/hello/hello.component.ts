import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelloService } from './hello.service';


@Component({
    selector:'app-hello',
    templateUrl :'hello.component.html',
    styleUrls:['/hello.component.css']
})
export class HelloComponent implements OnInit {
    greetingText:string;
    service:HelloService


    constructor(service: HelloService, private router: Router) {
        this.service = service
        this.getHello()
    }

    getHello() {
      this.service.get()
        .subscribe(response => {
            this.greetingText = response['text']
            //console.log("from backend:"+this.greetingText)
        })
    }

    ngOnInit() { }
}