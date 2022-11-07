import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../home/stories';

@Injectable({
  providedIn: 'root',
})
export class HosApiService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://hack-or-snooze-v3.herokuapp.com';

  getStories$: Observable<Story[]> = this.http.get<Story[]>(
    this.baseUrl + '/stories'
  );
}
