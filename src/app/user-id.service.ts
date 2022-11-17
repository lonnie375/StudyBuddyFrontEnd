import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserIDService {

userID:string = "";

  constructor() {
    console.log('Calling service')
   }

  checkUserLogged():boolean{
    if(this.userID === ''){
      return false;
    }
    else{
      return true;
    }
  }

  setUserID(id:string){
    this.userID = id;
  }

  getUserID():string{
    return this.userID;
  }


}
