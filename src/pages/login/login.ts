import { Component } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth'
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { Nav } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HomePage } from '../home/home';
import { LandpagePage} from '../landpage/landpage';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 user={};
 userId={
   uid:''
 }
  constructor(public navCtrl: NavController,public nav:Nav, public navParams: NavParams, private afauth:AngularFireAuth, private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  alert(message){
    this.alertCtrl.create({
      title:'Login Alert',
      subTitle:message,
      buttons:['Okay']
    }).present()
 }

 signup(){
  this.nav.setRoot(SignupPage);
}

  login(user){
    this.afauth.auth.signInWithEmailAndPassword(user.email,user.password)
    .then(data=>{
      this.alert('Success! logged in'+"<br>"+this.afauth.auth.currentUser.email);   
      console.log(data);
      this.userId.uid=this.afauth.auth.currentUser.uid;
      this.nav.setRoot(HomePage);
      
     
     })
   .catch(error=>
    {
      this.alert(error.message);
    })
   
  }
}
