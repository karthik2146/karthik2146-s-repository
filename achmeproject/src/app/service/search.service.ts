import { Injectable } from '@angular/core';
import { TwitterService } from './twitter.service';
import { DropboxService } from './dropbox.service';
import { SlackService } from './slack.service';
import { Observable } from 'rxjs';
import { Results } from '../model/results';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private twitter: TwitterService,
    private dropbBox: DropboxService,
    private slack: SlackService) { }

  public searchContent(keyword:string) {
    return new Observable<Results>((observer) => {

      this.twitter.getTweets().subscribe((tweets:any) => {
       const filteredTweets = this.filterMatchTerms(tweets.tweet,keyword);
       filteredTweets.forEach(tweet => {
         observer.next(new Results('twitter',tweet.message));
       });
      });

      this.dropbBox.getMessages().subscribe((msgs:any) => {
        const filtered = this.filterMatchTerms(msgs.dropbox,keyword);
       filtered.forEach(msg => {
         observer.next(new Results('dropBox',msg.path+' - '+msg.title));
       });
      });

      this.slack.getMessages().subscribe((msgs:any) => {
        const filtered = this.filterMatchTerms(msgs.slack,keyword);
        filtered.forEach(msg => {
          observer.next(new Results('slack',msg.message+' - '+msg.author));
        })
      });

    })


  }

  private filterMatchTerms(inputs: any[], searchTag:string){
   return inputs.filter(item => item.matching_terms.includes(searchTag));
  }

}
