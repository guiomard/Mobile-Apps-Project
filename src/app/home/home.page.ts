import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  weatherData: any = [];
  entry:String;
  userName:String;

  constructor(private dataService: DataService, private storage: Storage) { }

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

  onEnter(): void {
    this.userName = this.entry;
    this.storage.set("name", this.entry);
    console.log(this.entry);
    
    console.log(this.dataService.GetRandomIcon);
  }
}
