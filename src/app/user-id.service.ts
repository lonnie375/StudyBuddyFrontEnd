import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserIDService {

userID:string = '';

  constructor(private cookie:CookieService) {
    console.log('Calling service')
    this.userID = cookie.get('userID');
    console.log(this.userID)
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
