import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HomePageRoutingmodule} from 

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  getData() {
    
  }
}

