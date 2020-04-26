import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './api.service'
@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private apiService: ApiService) { }

  async getAll(){
    let data = await this.apiService.get('beers');
    return data
  }
  async getbeersbycount(number:number){
     return await this.apiService.getcount(number)
    
  }
}


