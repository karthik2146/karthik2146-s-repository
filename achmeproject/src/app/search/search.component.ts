import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../service/twitter.service';
import { SearchService } from '../service/search.service';
import { Observable } from 'rxjs';
import { Results } from '../model/results';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchResults: Observable<any>;

  searchValue = '';

  results: Results[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  public search() {
    this.results=[];
    this.searchService.searchContent(this.searchValue).subscribe(result => {
      this.results.push(result);
    })

  }


}
