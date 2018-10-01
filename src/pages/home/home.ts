import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { USER } from '../../interfaces/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: USER = { username: 'admin', password: 'admin'};

  constructor(
    public navCtrl: NavController, 
    public authService: AuthServiceProvider, 
    public alertCtrl: AlertController
    ) { 

    }
 
  loginUser() {
    this.authService.login(this.user);
    console.log('home => user', this.authService.getUser());
  }
 
  logoutUser() {
    this.authService.logout();
  }
 
  nextPage(page: string) {
    // if(this.authService.getUserPermissions(page) && this.authService.authenticated()){
      console.log('home => page', page);
      console.log('home => getUserPermissions', this.authService.getUserPermissions(page));
      
      this.navCtrl.push(page).then( res => {
        console.log('res', res);
        if(!res){
          this.showAlert();
        }
      }).catch(err => {
        this.showAlert();
      });

    // } else {
    //   this.navCtrl.push(SecondPage)
    // }
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'No Permissions, No entry!',
      subTitle: 'You shall not pass',
      buttons: ['Okay','Fly you fools']
    });
    alert.present();
  }
 
  isAuthenticated() {
    return this.authService.authenticated();
  }

}
