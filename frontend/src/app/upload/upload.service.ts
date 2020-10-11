import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UploadService {

  serverUrl = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get(this.serverUrl + '/api/imageUrls')
  }

  public uploadImage(image: File):Observable<any> {
    const formData = new FormData();
    formData.append('userFile', image);
    return this.http.post(this.serverUrl + '/api/upload', formData);
  }

}