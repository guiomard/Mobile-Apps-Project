import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  entry:String;
  userName:String;

  constructor( private storage: Storage) { }

  //every page checks to see if there's a username on file so that it can be displayed on the top right
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

  onEnter(): void {
    //I have the name transfer from one variable to another so that changing it in the textbox doesn't immediately change it up above
    //having the name  change triggered by an additional button press is more professional looking and also allows the ion-chip to change size to fit the entered name
    //the username then of course gets sent to local storage for use across the rest of the app
    //it doesn't really do anything and is just ceremonial though
    this.userName = this.entry;
    this.storage.set("name", this.entry);
    console.log(this.entry);
  }
}
