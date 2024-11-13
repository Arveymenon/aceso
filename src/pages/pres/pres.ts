import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdetailPage } from '../pdetail/pdetail'
/**
 * Generated class for the PresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pres',
  templateUrl: 'pres.html',
})
export class PresPage {
  type: string = "current";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  next(id){
    this.navCtrl.push(PdetailPage, id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresPage');
  }

}
