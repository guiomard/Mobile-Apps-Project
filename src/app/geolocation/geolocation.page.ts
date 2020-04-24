import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
  
  weatherDataCoord: any = [];
  userName:String;
  location:String;
  entry:String;

  constructor(private dataService:DataService, private storage: Storage, private geolocation:Geolocation) {}


  ngOnInit(): void {
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
