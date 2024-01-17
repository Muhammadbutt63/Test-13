import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private readonly HttpClient: HttpClient
  ) { }

  getApiData(){
    return this.HttpClient.get('https://api.data.gov.sg/v1/environment/air-temperature');
  }


}
