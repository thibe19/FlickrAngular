import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey = "cc492c3b1c791b16d7fe053c79533642";
  constructor(private http:HttpClient) { }

  searchByTag(tag:string){
    return this.http.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+this.apiKey+"&tags="+tag+"&format=json&nojsoncallback=1&api_sig=709b21c6645ce4f1a61a30e6ab6048ba");
  }
  searchByTagAndFilter(tag:string,filters:Array<any>){
    return this.http.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+this.apiKey+"&tags="+tag+"&text="+filters['text']+"&min_upload_date="+filters["min_upload_date"]+"&max_upload_date="+filters["max_upload_date"]+"&format=json&nojsoncallback=1&api_sig=2c6a2198d32d8c1dd48a88f05b03c556");
  }
}
