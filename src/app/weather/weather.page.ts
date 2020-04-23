import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service'
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  
  weatherData: any = [];
  icon: String;
  userName:String;

  constructor(private dataService:DataService, private storage: Storage) {}

  ngOnInit(): void {
    this.dataService.GetWeatherData("Galway").subscribe(
      (data) => {
        this.weatherData = data.weather;
        console.log(this.weatherData);
      }
    )

    this.storage.get("name").then(
      (data) => {
        if (data==null){
          console.log("No Username");
        }
        else{
          this.userName = data;
        }        
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }
}
