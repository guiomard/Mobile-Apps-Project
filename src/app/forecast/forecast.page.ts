import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {

  forecastData: any = [];
  weatherData: any = [];
  userName: String;
  location: String;
  entry: String;

  constructor(private dataService: DataService, private storage: Storage, private geolocation: Geolocation) { }

  ngOnInit(): void {
    this.storage.get("name").then(
      (data) => {
        if (data == null) {
          console.log("No Username");
        }
        else {
          this.userName = data;
        }
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }

  /*onEnter(): void {
    this.location = this.entry;
    this.dataService.GetForecastData(this.entry).subscribe(
      (data) => {
        this.forecastData = data.list;
        console.log(this.forecastData);
      }
    )
  }*/

}
