import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  
  constructor(private httpService:HttpService) { }

  public getContacts(){
    return this.httpService.httpGet('assets/contacts.json');
  }
}
