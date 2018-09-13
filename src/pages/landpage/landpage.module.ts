import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandpagePage } from './landpage';

@NgModule({
  declarations: [
    LandpagePage,
  ],
  imports: [
    IonicPageModule.forChild(LandpagePage),
  ],
})
export class LandpagePageModule {}
