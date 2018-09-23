import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddDetail3} from '../add-detail3/add-detail3';

/**
 * Generated class for the AddDetail2 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-add-detail2',
  templateUrl: 'add-detail2.html',
  entryComponents:[ AddDetail3, ]
})
export class AddDetail2 {
  empStatus:any = "";
  accountName:any = "";
  projManager:any = "";
  projId:any = "";
  startDate:any = "";
  endDate:any = "";
  projName:any = "";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDetail2');
  }
  
  public saveTaggingDetails(){
	this.navParams.data.newObj.ResourceCurrentStatus = this.empStatus;
	this.navParams.data.newObj.Accountname = this.accountName;
	this.navParams.data.newObj.ProjectName = this.projName;
	this.navParams.data.newObj.ProjectManager = this.projManager;
	this.navParams.data.newObj.PID = this.projId;
	if(this.startDate != undefined && this.startDate != ""){
		this.navParams.data.newObj.AllocationStartDate = this.startDate.replace(/-/g, "/");
	}
	if(this.endDate != undefined && this.endDate != ""){
		this.navParams.data.newObj.Allocationenddate = this.endDate.replace(/-/g, "/");
	}
	this.navCtrl.push(AddDetail3, {newObj: this.navParams.data.newObj});
  }

}
