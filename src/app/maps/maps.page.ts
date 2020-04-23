import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service'
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  mapType: String = "temp_new";
  userName: String;

  constructor(private storage: Storage) { }


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
}
