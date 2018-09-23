import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Tab1} from './tab1/tab1';
import {Tab2} from './tab2/tab2';
import {Tab3} from './tab3/tab3';

/**
 * Generated class for the Details page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  entryComponents:[ Tab1, Tab2, Tab3]
})
export class Details {
  tab1 = Tab1;
  tab2 = Tab2;
  tab3 = Tab3;
  patientDetails:any;
  
  showData(){
	console.info(this.navParams); 
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.showData(); 
	this.patientDetails = navParams;
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad Details');
  }*/

}
