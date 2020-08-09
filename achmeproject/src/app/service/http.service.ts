import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient ) { }

  public httpGet(service: string){
    return this.http.get(service);
  }
}
