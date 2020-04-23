import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //city:String = "galway";

  constructor(public httpClient:HttpClient) { }
  
  GetWeatherData(city:any):Observable<any>{
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=ba5c6aa709bd7f88b050b9a75f80ce61');
  }

  //GetForecastData():Observable<any>{
    //return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&APPID=ba5c6aa709bd7f88b050b9a75f80ce61');
  //}
}
