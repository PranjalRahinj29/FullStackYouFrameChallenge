import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { UploadComponent } from './upload/upload.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadService } from './upload/upload.service';


const routes: Route[] = [

  { path: 'app-upload', component: UploadComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
