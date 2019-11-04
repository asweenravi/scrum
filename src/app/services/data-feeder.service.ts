import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFeederService {

  constructor(private http: HttpClient) { }

  addStoryPoint(body) {
    this.http.post('http://localhost:9000/addStoryPoint', body);
  }

  getStoryPoint() {
    this.http.get('http://localhost:9000/getStoryPoint');
  }
}
