import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //https://api.openweathermap.org/data/2.5/weather?lat=53.329919999999994&lon=-6.6224128&appid=ba5c6aa709bd7f88b050b9a75f80ce61

  constructor(public httpClient:HttpClient) { }
  
  GetWeatherData(city:any):Observable<any>{
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=ba5c6aa709bd7f88b050b9a75f80ce61');
  }

  GetWeatherDataCoord(lat:any, long:any):Observable<any>{
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=ba5c6aa709bd7f88b050b9a75f80ce61');
  }

  //GetForecastData():Observable<any>{
    //return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&APPID=ba5c6aa709bd7f88b050b9a75f80ce61');
  //}

  GetRandomIcon():String{
    if(Math.random( )>0.5){
      return "yes";
    }
    else{
      return "no";
    }
  }
}
