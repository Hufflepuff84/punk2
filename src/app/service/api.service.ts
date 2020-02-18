import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url="https://api.punkapi.com/v2/beers";


  constructor(private httpClient : HttpClient) {}
  async get(path){
    return await this.httpClient.get<any>(this.url).toPromise();
   }

}
