import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tab1 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1 {
  patient:any;
  adjustDetails(){
	console.info(this.navParams);
	let key = null;
	for(key in this.patient){
		if(this.patient[key] == ""){
			this.patient[key] = "NA"
		}
	}
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.patient = navParams.data.item;
	  this.adjustDetails();
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1');
  }*/

}
