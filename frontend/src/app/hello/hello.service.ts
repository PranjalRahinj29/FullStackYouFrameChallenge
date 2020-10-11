import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HelloService{
    url = 'http://localhost:4000'

  
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url +'/api/hello')
  }
  
}