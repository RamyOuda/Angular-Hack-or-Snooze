import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HosApiService } from '../api/hos-api.service';
import { Story, StoryData } from './stories';

import { Store } from '@ngrx/store';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<any>, private apiService: HosApiService) {}

  stories$: Observable<Story[]> = this.apiService.getStories$.pipe(
    tap((data: any) => console.log(data)),
    map((data: StoryData) =>
      data.stories.map((story: Story) => ({
        ...story,
        shortUrl: new URL(story.url).hostname,
      }))
    )
  );

  ngOnInit(): void {}
}
