import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import {HttpModule} from '@angular/http';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { LandpagePage } from '../pages/landpage/landpage';
import { ProfilePage} from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';
import { GalleryPage } from '../pages/gallery/gallery';
import { NewsPage} from '../pages/news/news';
import { MessagePage} from '../pages/message/message';

import {AngularFireAuth} from 'angularfire2/auth'
import {FIREBASE_CONFIG} from './app.firebaseconfig'
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from '../../node_modules/angularfire2/auth';
import { AuthService } from '../pages/service/auth.service'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    LandpagePage,
    ProfilePage,
    AboutPage,
    GalleryPage,
    NewsPage,
    MessagePage
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    LandpagePage,
    ProfilePage,
    AboutPage,
    GalleryPage,
    NewsPage,
    MessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
