import { Component } from '@angular/core';


import { Platform } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public model:any={};
  constructor(public platform:Platform,private localNotifications: LocalNotifications) {}
  localNotification(){
    // Schedule delayed notification
    let trigger:any= { every: "minute", count: 5 }
    this.localNotifications.schedule({
      id:1,
      title: 'Local ILocalNotification Example',
      text: this.model.message?this.model.message:'Delayed ILocalNotification',
      //trigger: {at: new Date(new Date().getTime() + 3600)},
      
      led: 'FF0000',
      sound: null
    });
  }
}
