export interface Story {
  author: string;
  createdAt: string;
  storyId: string;
  title: string;
  updatedAt: string;
  url: string;
  username: string;
  shortUrl?: string;
}

export interface StoryData {
  stories: Story[];
}
