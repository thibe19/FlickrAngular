import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiService/api-service.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  public tag = "";
  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  search(){
    console.log(this.tag);
    this.apiService.searchByTag(this.tag);
  }
}
