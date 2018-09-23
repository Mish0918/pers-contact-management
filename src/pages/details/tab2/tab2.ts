import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tab2 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2 {
  employee:any;
  adjustDetails(){
	console.info(this.navParams);
	let key = null;
	for(key in this.employee){
		if(this.employee[key] == ""){
			this.employee[key] = "NA"
		}
	}
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.employee = navParams.data.item;
	  this.adjustDetails();
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2');
  }*/

}
