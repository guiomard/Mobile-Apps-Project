import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  
  weatherData: any = [];
  weatherDataCoord: any = [];
  userName:String;
  location:String;
  entry:String;

  constructor(private dataService:DataService, private storage: Storage, private geolocation:Geolocation) {}


  ngOnInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });

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

  onEnter(): void {
    this.location = this.entry;
    this.dataService.GetWeatherData(this.entry).subscribe(
      (data) => {
        this.weatherData = data.weather;
      }
    )
  }

  onEnterGPS(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.dataService.GetWeatherDataCoord(resp.coords.latitude, resp.coords.longitude).subscribe(
      (data) => {
        this.weatherDataCoord = data.weather;
      }
    )
     }).catch((error) => {
       console.log('Error getting location', error);
     });    
  }
}
