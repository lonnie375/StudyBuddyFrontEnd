import { Component,OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserIDService } from './user-id.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevBuildBootCampFrontEnd';
 
  isUserLogged:boolean = false;
  userIDFilled:string ='';

  constructor(private UserSrv:UserIDService,private cookie:CookieService){
   this.checkuserID();
   this.userIDFilled = UserSrv.getUserID();
  }

  ngOnInit(): void {
    this.checkuserID();
    this.userIDFilled = this.UserSrv.getUserID();
  }

  checkuserID(){
    this.isUserLogged = this.UserSrv.checkUserLogged();
  }

  setUserID(){
    this.UserSrv.setUserID(this.userIDFilled);
    this.cookie.set('userID',`${this.userIDFilled}`)
    this.isUserLogged = true;
  }

  userLogOut(){
    this.cookie.set('userID','');
    this.ngOnInit();
  }

}
