import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Details } from '../pages/details/details';
import {Tab1} from '../pages/details/tab1/tab1';
import {Tab2} from '../pages/details/tab2/tab2';
import {Tab3} from '../pages/details/tab3/tab3';
import {AddDetail1} from '../pages/home/add-detail1/add-detail1';
import {AddDetail2} from '../pages/home/add-detail2/add-detail2';
import {AddDetail3} from '../pages/home/add-detail3/add-detail3';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	Details,
	Tab1,
	Tab2,
	Tab3,
	AddDetail1,
	AddDetail2,
	AddDetail3
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	Details,
	Tab1,
	Tab2,
	Tab3,
	AddDetail1,
	AddDetail2,
	AddDetail3
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
