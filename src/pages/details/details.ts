import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  item:any;
  constructor(public navCtrl: NavController,public params:NavParams) {
    this.item = params.get('item');
  }

  ngOnInit(){
    
  }


}
