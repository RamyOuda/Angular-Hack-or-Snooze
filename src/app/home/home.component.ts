import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HosApiService } from '../hos-api.service';
import { Stories } from '../stories';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: HosApiService) {}

  stories$: Observable<Stories[]> = this.apiService.getStories$;

  ngOnInit(): void {
    console.log(this.stories$);
  }
}
