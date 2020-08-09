import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private httpService:HttpService) { }

  public getTweets(){
    return this.httpService.httpGet('assets/tweet.json');
  }

}
