import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DoctorPage } from '../doctor/doctor';
import { PresPage } from '../pres/pres';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  load(){
    this.navCtrl.push(DoctorPage)
  }
  mypres(){
    this.navCtrl.push(PresPage)
  }
}
