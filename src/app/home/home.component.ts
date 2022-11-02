import { Component, OnInit } from '@angular/core';
import { HosApiService } from '../hos-api.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: HosApiService) {}

  data$: any;

  ngOnInit(): void {
    this.data$ = this.apiService.getStories();
  }
}
