import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { GalleryPage } from '../gallery/gallery';
import { Nav } from 'ionic-angular';

/**
 * Generated class for the LandpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landpage',
  templateUrl: 'landpage.html',
})
export class LandpagePage {

  constructor(public navCtrl: NavController,public nav:Nav, public navParams: NavParams,private toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandpagePage');
  }
galleryView()
{
  this.nav.setRoot(GalleryPage);
}
}
