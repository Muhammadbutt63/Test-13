import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../datamangement/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  originaldata: any = [];

  constructor(
    private readonly servicesservice: ServicesService
  ){
  }

  ngOnInit(){
    this.getApiData();
  }

  getApiData(){
    this.servicesservice.getApiData().subscribe((response:any) => {
      const {metadata} = response;
      const { stations } = metadata;
      this.originaldata = stations;
      console.log(stations);
        });
  }
}
