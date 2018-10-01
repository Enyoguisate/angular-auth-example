import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {

  constructor(
    public navCtrl: NavController, 
    public authService: AuthServiceProvider
    ) {

    }
 
  ionViewCanEnter() {
    console.log('3', this.authService.authenticated() && this.authService.getUserPermissions('ThirdPage'));
    return this.authService.authenticated() && this.authService.getUserPermissions('ThirdPage');
  }

}
