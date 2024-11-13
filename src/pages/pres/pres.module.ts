import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresPage } from './pres';

@NgModule({
  declarations: [
    PresPage,
  ],
  imports: [
    IonicPageModule.forChild(PresPage),
  ],
})
export class PresPageModule {}
