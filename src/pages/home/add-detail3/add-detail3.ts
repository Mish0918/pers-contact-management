import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AddDetail1} from '../add-detail1/add-detail1';
import {AddDetail2} from '../add-detail2/add-detail2';
import {DataService} from '../service';

/**
 * Generated class for the AddDetail3 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-add-detail3',
  templateUrl: 'add-detail3.html',
   providers: [DataService]
})
export class AddDetail3 {
  deliveryBu:any = "";
  deliveryRegion:any = "";
  country:any = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDetail3');
  }
  
  
  public saveBuDetails(){
	this.navParams.data.newObj.DeliveryBU = this.deliveryBu;
	this.navParams.data.newObj.DeliveryRegion = this.deliveryRegion;
	this.navParams.data.newObj.SectorCountry = this.country;
	//HomePage.listItems.push(this.navParams.data.newObj);
	this.data.setData(this.navParams.data.newObj);
	this.navCtrl.popToRoot();
  }

}
