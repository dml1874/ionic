import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { AppService } from './app.service';
import { AppShare } from './app.share';
// import { QQSDK } from '@ionic-native/qqsdk';
// import { Wechat } from '@ionic-native/wechat';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    AppService, 
    AppShare, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ThemeableBrowser
  ]
})

export class AppModule {}
