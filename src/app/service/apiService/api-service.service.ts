import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey = "cc492c3b1c791b16d7fe053c79533642";
  constructor(private http:HttpClient) { }

  searchByTags(tag:string){
    return this.http.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+this.apiKey+"&tags="+tag+"&format=json&nojsoncallback=1&api_sig=709b21c6645ce4f1a61a30e6ab6048ba");
  }
}
