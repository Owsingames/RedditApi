import { Component } from '@angular/core';
import {RedditPost} from './redditObject';
import { ApiTestService } from './api.Reddit.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiTestService]
})
export class AppComponent {
  title = 'RedditFormApi';
  post: RedditPost | null = null;
  constructor(private api: ApiTestService) { }

  //method will handle the api call
  redditCall(sub:string){
    let response = this.api.getPost(sub)
    console.log(response);

    response.subscribe(
      (data: RedditPost) => this.post =
      {title:data.title,
      author_fullname:data.author_fullname,
      ups:data.ups,
      total_awards_received:data.total_awards_received,
      thumbnail:data.thumbnail}
    );
  }
}
