import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  pages = [
    {title: 'Welcome', url: '', icon: "bookmark"},
    {title: 'Properties', url: '/property-list', icon: "home"},
    {title: 'Brokers', url: '/broker-list', icon: "people"},
    // {title: 'Favorites', url: '/favorite-list', icon: "star"},
    {title: 'Survey', url: '/survey', icon: "create"}
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
