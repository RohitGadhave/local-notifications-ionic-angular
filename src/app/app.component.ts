import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public platform:Platform,private localNotifications: LocalNotifications) { }

  initializeApp() {
    this.platform.ready().then(() => {  
     this.localNotification();
      
   });
  }
  localNotification(){
    // Schedule delayed notification
    let trigger:any= { every: "minute", count: 5 }
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      //trigger: {at: new Date(new Date().getTime() + 3600)},
      trigger: trigger,
      led: 'FF0000',
      sound: null
    });
  }
}
