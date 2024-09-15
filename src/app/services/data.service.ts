import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   url = '../../assets/user-list.json';

  constructor(private http: HttpClient) { }

  getInfo(){
    return this.http.get(this.url);
  }
}
