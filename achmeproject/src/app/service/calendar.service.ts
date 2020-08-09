import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  
  constructor(private httpService:HttpService) { }

  public getMessages(){
    return this.httpService.httpGet('assets/calendar.json');
  }
}
