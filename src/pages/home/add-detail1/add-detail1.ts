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
	empName:any = "";
	empId:any = "";
	empEmail:any = "";
	grade:any = "";
	level:any = "";
	empLocation:any = "";
	skill:any = "";
	isFresher:any = "";
	hireDate:any = "";
	empAge:any = "";
	empAgeBucket:any = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDetail1');
  }
  
  public saveEmpDetails(){

	this.navParams.data.newObj.EmpName = this.empName;
	this.navParams.data.newObj.EmpId = this.empId;
	this.navParams.data.newObj.EmailID = this.empEmail;
	this.navParams.data.newObj.Grade = this.grade;
	this.navParams.data.newObj.Level = this.level;
	this.navParams.data.newObj.Location = this.empLocation;
	this.navParams.data.newObj.PrimarySkills = this.skill;
	this.navParams.data.newObj.Fresher = this.isFresher;
	this.navParams.data.newObj.HireDate = this.hireDate;
	this.navParams.data.newObj.Age = this.empAge;
	this.navParams.data.newObj.AgeBucket = this.empAgeBucket;
	if(this.hireDate != undefined && this.hireDate != ""){
		this.hireDate = this.hireDate.replace(/-/g, "/");
	}
	this.navParams.data.newObj.HireDate = this.hireDate;
	
	console.info(this.navParams);
	this.navCtrl.push(AddDetail2, {newObj: this.navParams.data.newObj});
  }

}
