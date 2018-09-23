import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {Http, Response} from '@angular/http';

import {Details} from '../details/details';
import {AddDetail1} from './add-detail1/add-detail1';
import {AddDetail2} from './add-detail2/add-detail2';
import {AddDetail3} from './add-detail3/add-detail3';
import {DataService} from './service';
import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents:[ Details, AddDetail1, AddDetail2, AddDetail3, ],
   providers: [DataService]
})

export class HomePage {
	searchQuery: string = '';
	listItems: any;
	fullList: any;

	public initializeList(){
		// Reading from the local json file
		let url = 'data/data.json';
		if (this.platform.is('cordova') && this.platform.is('android')) {
			url = "/android_asset/www/" + url;
		}

		this.http.get(url)
			.map(res => res.json())
			.subscribe(result => {this.listItems = result; this.fullList = result;});

	}
	
	public itemSelected(item){
		this.navCtrl.push(Details, {
		  item: item
		});
	}
	
	ionViewWillEnter() {
		let newAddition = this.data.getData();
		if(this.listItems != undefined && newAddition!=undefined){
			this.listItems.push(newAddition);
			this.fullList = this.listItems;
			console.info(this.listItems);
		}
	}
	
	public showAddPage(){
			let newResource = {
		    "EmpId": "",
            "EmpName": "",
            "EmailID": "",
            "Level": "",
            "Grade": "",
            "Location": "",
            "Fresher": "",
            "HireDate": "",
            "Practice": "Mobile/UI/UX",
            "ServiceLine": "Mobile",
            "SubPractice": "Mobile",
            "PrimarySkills": "",
            "PID": "",
            "ProjectName": "",
            "ProjectManager": "",
            "Accountname": "",
            "AllocationStartDate": "",
            "Allocationenddate": "",
            "ResourceCurrentStatus": "",
            "FTE": "1",
            "DeliveryBU": "",
            "DeliveryRegion": "",
            "SectorCountry": "",
            "Age": "",
            "AgeBucket": ""
		};
		this.navCtrl.push(AddDetail1,{newObj:newResource});
	}
	
	getItems(ev: any) {
    // Reset items back to all of the items
	this.listItems = this.fullList;
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.listItems = this.listItems.filter((item) => {
		if(item.EmpName.toLowerCase().indexOf(val) > -1 || item.EmpId.indexOf(val) > -1 || item.Location.toLowerCase().indexOf(val) > -1 || item.Grade.toLowerCase().indexOf(val) > -1 || item.PrimarySkills.toLowerCase().indexOf(val) > -1 || item.ResourceCurrentStatus.toLowerCase().indexOf(val) > -1){
			return item;
		 }
		 else{
			return null;
		 }

      })
    }
  }

	
  constructor(public navCtrl: NavController,  public navParams: NavParams, private http:Http, private platform:Platform, public data: DataService) {
	this.initializeList();
  }
  


}
