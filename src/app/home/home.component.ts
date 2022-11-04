import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HosApiService } from '../hos-api.service';
import { Stories } from '../stories';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: HosApiService) {}

  stories$: Observable<Stories[]> = this.apiService.getStories$.pipe(
    map((item: any) => {
      this.shortUrls = item.stories.map(
        (story: any) => new URL(story.url).hostname
      );
      return item.stories;
    })
  );

  shortUrls!: string[];

  ngOnInit(): void {}
}
