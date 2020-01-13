import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/apiService/api-service.service';
import {GalleryComponent} from './components/gallery/gallery.component';
import { FormsModule } from '@angular/forms';
import {ImageComponent} from './components/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    GalleryComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
