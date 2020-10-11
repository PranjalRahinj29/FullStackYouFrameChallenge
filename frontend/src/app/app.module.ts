import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HttpClientModule } from '@angular/common/http';
import { HelloService } from './hello/hello.service';
import { RouterModule, Route } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { DummyComponent } from './dummy/dummy.component';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Route[] = [
 {path:'app-hello', component:HelloComponent},
 {path:'app-upload', component:UploadComponent},
 {path:'app-slider', component: SliderComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UploadComponent,
    DummyComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
   RouterModule.forRoot(routes)
  ],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
