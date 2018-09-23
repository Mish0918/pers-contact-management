import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddDetail2} from '../add-detail2/add-detail2';

/**
 * Generated class for the AddDetail1 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-add-detail1',
  templateUrl: 'add-detail1.html',
  entryComponents:[ AddDetail2, ]
})
export class AddDetail1 {
	patientName:any = "";
	patientId:any = "";
	grade:any = "";
	patientLocation:any = "";
	admissionDate:any = "";
	patientAge:any = "";
	patientAgeBracket:any = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDetail1');
  }
  
  public saveEmpDetails(){

	this.navParams.data.newObj.PatientName = this.patientName;
	this.navParams.data.newObj.PatientId = this.patientId;
	this.navParams.data.newObj.Grade = this.grade;
	this.navParams.data.newObj.Location = this.patientLocation;
	this.navParams.data.newObj.AdmissionDate = this.admissionDate;
	this.navParams.data.newObj.Age = this.patientAge;
	this.navParams.data.newObj.AgeBracket = this.patientAgeBracket;
	if(this.admissionDate != undefined && this.admissionDate != ""){
		this.admissionDate = this.admissionDate.replace(/-/g, "/");
	}
	this.navParams.data.newObj.HireDate = this.admissionDate;
	
	console.info(this.navParams);
	this.navCtrl.push(AddDetail2, {newObj: this.navParams.data.newObj});
  }

}
