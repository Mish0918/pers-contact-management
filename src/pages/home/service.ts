import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
   data:any;
  constructor() {
  }

  setData(dataObj){
	 this.data = dataObj; 
  }

  getData() {
    return this.data;
  }
}
