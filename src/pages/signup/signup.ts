import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {AngularFireAuth} from 'angularfire2/auth';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user={};
  userId={
    uid:''
  }
  constructor(public navCtrl: NavController,public nav:Nav, public navParams: NavParams,private afauth:AngularFireAuth,
    private alertCtrl:AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  alert(message){
    this.alertCtrl.create({
      title:'Info',
      subTitle:message,
      buttons:['OK']
    }).present()
 }
 register(user)
 {
  this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password)
  .then(data=>
    {
      this.userId.uid=this.afauth.auth.currentUser.uid;
      this.alert('Register Successfull')
    })
    .catch(error=>
      {
        this.alert(error.message);
      });
      console.log('would register user with',user.email,user.password)
 }
  login()
  {
    this.nav.setRoot(LoginPage);
 }

}
