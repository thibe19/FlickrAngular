import {
  ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Injectable,
  Input, OnChanges, OnDestroy, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren
} from '@angular/core';
// @ts-ignore
import {ApiService} from '../../service/apiService/api-service.service';
import {Subscription} from 'rxjs/internal/Subscription';
import {ImageComponent} from '../image/image.component';
import {HttpClient} from '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class GalleryComponent implements OnInit {

  @Input() images: string[];
  constructor() { }

  ngOnInit() {
  }
}
