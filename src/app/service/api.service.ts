import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBeer } from '../interface/ibeer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url="https://api.punkapi.com/v2/beers";


  constructor(private httpClient : HttpClient) {}
  async get(path){
    return await this.httpClient.get<any>(this.url).toPromise();
   }
  async getcount(count: number):Promise<IBeer[]>{
    return this.httpClient.get<IBeer[]>(`${this.url}?per_page=${count}`).toPromise(); // this just gets back the number of beers from the api 
  }
    
  }

