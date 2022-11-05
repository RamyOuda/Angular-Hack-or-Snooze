import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stories } from './stories';

@Injectable({
  providedIn: 'root',
})
export class HosApiService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://hack-or-snooze-v3.herokuapp.com';

  getStories$: Observable<Stories[]> = this.http.get<Stories[]>(
    this.baseUrl + '/stories'
  );
}
