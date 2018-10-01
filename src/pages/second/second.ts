import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(
    public navCtrl: NavController, 
    public authService: AuthServiceProvider
    ) {

    }
 
  ionViewCanEnter() {
    console.log('2', this.authService.authenticated() && this.authService.getUserPermissions('SecondPage'));
    
    return this.authService.authenticated() && this.authService.getUserPermissions('SecondPage');
  }

}
