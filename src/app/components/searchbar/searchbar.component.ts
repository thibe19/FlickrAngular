import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiService/api-service.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  public tag = "";
  public datemin = null;
  public datemax = null;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }
  search(){
    if(this.datemin == null && this.datemax == null ){
      this.apiService.searchByTag(this.tag);
    }else{
      let filters = Array();
      filters['min_upload_date'] = this.datemin;
      filters['max_upload_date'] = this.datemax;
      this.apiService.searchByTagAndFilter(this.tag,filters);
    }
  }
}
