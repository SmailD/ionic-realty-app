import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageModule } from './pages/welcome/welcome.module';
import { PropertyListPageModule } from './pages/property-list/property-list.module';
import { PropertyDetailsPageModule } from './pages/property-details/property-details.module';
import { FavoriteListPageModule } from './pages/favorite-list/favorite-list.module';
import { BrokerDetailsPageModule } from './pages/broker-details/broker-details.module';
import { BrokerListPageModule } from './pages/broker-list/broker-list.module';
import { CacheInterceptor } from './interceptors/cach.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    WelcomePageModule,
    PropertyListPageModule,
    PropertyDetailsPageModule,
    FavoriteListPageModule,
    BrokerDetailsPageModule,
    BrokerListPageModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
