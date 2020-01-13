import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  datas: string[];
  apiKey = "535a87a2f2c770de1777c7a7931a724f";
  constructor(private http:HttpClient) { }

  searchByTag(tag:string){
    let apiURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.apiKey}&tags=${tag}&format=json&nojsoncallback=1`;
    let datas = this.http.get(apiURL);
    datas.subscribe((data) => this.datas = datas['photos']['photo']);
    datas.subscribe((data) => console.log(data['photos']['photo']));
  }
  getDatas(){
    return this.datas;
  }
  searchByTagAndFilter(tag:string,filters:Array<any>){
    let datas = this.http.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+this.apiKey+"&tags="+tag+"&min_upload_date="+filters["min_upload_date"]+"&max_upload_date="+filters["max_upload_date"]+"&format=json&nojsoncallback=1");
    datas.subscribe((data) => this.datas = datas['photos']);
    datas.subscribe((data) => console.log(data));
  }
}
