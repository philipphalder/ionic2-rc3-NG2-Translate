import { Component } from '@angular/core';

import { NavController,
         AlertController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public translate: TranslateService) {
    
  }

  showAlert() {
      this.translate.get('alert-info').subscribe(value => {
      let alert = this.alertCtrl.create({
        title: value.title,
        subTitle: value.subTitle,
        buttons: ['OK']
      });
      alert.present();
    });   
  }

}
