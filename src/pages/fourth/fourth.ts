import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-fourth',
  templateUrl: 'fourth.html',
})
export class FourthPage {

  constructor(
    public navCtrl: NavController, 
    public authService: AuthServiceProvider
    ) {

    }
 
  ionViewCanEnter() {
    console.log('4', this.authService.authenticated() && this.authService.getUserPermissions('FourthPage'));
    return this.authService.authenticated() && this.authService.getUserPermissions('FourthPage');
  }
  
}
