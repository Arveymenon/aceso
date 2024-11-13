import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PresPage } from '../pres/pres'
/**
 * Generated class for the PdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdetail',
  templateUrl: 'pdetail.html',
})
export class PdetailPage {

prescriptions:any=[
  {
    orderid: '1',
    qrimg: 'blank',
    doc: 'Finn',
    meds: 'Meftal spas',
    placed: '20 March, 2018',
    delivery: '30 March, 2018',
    amt: '200'
  },
  {
    orderid: '2',
    qrimg: 'blank',
    doc: 'Finn',
    meds: 'Crocin',
    placed: '21 March, 2018',
    delivery: '31 March, 2018',
    amt: '200'
  },
  {
    orderid: '3',
    qrimg: 'blank',
    doc: 'Finn',
    meds: 'Meftal spas',
    placed: '18 March, 2018',
    delivery: '27 March, 2018',
    amt: '200'
  }
]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let id = this.navParams.get('id');
    console.log(this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdetailPage');
    
  }

}
