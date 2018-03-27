import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  limit:any;
  category:any;

  constructor(public navCtrl: NavController) {
    this.getDefaults();
  }

  setDefaults(){
      localStorage.setItem('category',this.category);
      localStorage.setItem('limit',this.limit);
      this.navCtrl.push(HomePage);
  }

  getDefaults(){
      if(localStorage.getItem('category') != null){
        this.category=localStorage.getItem('category');
      }
      else{
          this.category="sports";
      }
      if(localStorage.getItem('limit') != null){
        this.limit=localStorage.getItem('limit');
      }
      else{
        this.limit=5;
      }

  }


}
