import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpClient:HttpClient) { }
  
  //this method just grabs data off of a url that has a user-set variable subbed into it
  GetWeatherData(city:any):Observable<any>{
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=ba5c6aa709bd7f88b050b9a75f80ce61');
  }

  //this ones the same but uses coordinates gotten from the GPS plugin 
  GetWeatherDataCoord(lat:any, long:any):Observable<any>{
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=ba5c6aa709bd7f88b050b9a75f80ce61');
  }
}
