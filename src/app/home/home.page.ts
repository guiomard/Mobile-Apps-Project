import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  weatherData: any = [];
  icon:String = "10d";

  constructor(private dataService:DataService) {}

  ngOnInit(): void {
    this.dataService.GetWeatherData().subscribe(
      (data) => {
        this.weatherData = data.weather;
        console.log(this.weatherData);
        //this.icon = data.weather.icon;
      }
    )
  }

}
