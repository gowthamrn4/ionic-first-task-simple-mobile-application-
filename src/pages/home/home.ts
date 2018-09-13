import { Component,ViewChild } from '@angular/core';
import { LoginPage } from '../login/login';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { App, MenuController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {LandpagePage} from '../landpage/landpage';
import {ProfilePage} from '../profile/profile';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email:String;
  public rootPage:any
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController,
              private afauth:AngularFireAuth,
              public navParams: NavParams, 
              private alertCtrl:AlertController,
              app: App, menu: MenuController) 
              {
                this.email=afauth.auth.currentUser.email
              }
  alert(message){
    this.alertCtrl.create({
      title:'Info',
      subTitle:message,
      buttons:['OK']
    }).present()
 }
 openPage(page){
  switch(page){
  case 'dashboard':
  this.nav.setRoot(LandpagePage);
  break;

  case 'profile':
  this.nav.setRoot(ProfilePage);
  break;
  // case 'logout':
  // this.nav.setRoot(LoginPage)
  default:
  this.nav.setRoot(LandpagePage);
  break;
}
}
  logout(){
    this.afauth.auth.signOut();
    this.nav.setRoot(LoginPage);
    this.alert("Logout Success"+"<br>"+this.email);
 }
 ionViewDidLoad(){
  this.rootPage = LandpagePage;
 }
}
