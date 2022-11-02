import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HosApiService {
  constructor(private http: HttpClient) {}

  url = 'https://hack-or-snooze-v3.herokuapp.com/';

  getStories() {
    this.http.get<any>(this.url + 'stories');
  }
}
