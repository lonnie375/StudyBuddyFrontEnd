import { Component,OnInit } from '@angular/core';
import { UserIDService } from './user-id.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevBuildBootCampFrontEnd';
 
  isUserLogged:boolean = false;
  userIDFilled:string ='Not Set';

  constructor(private UserSrv:UserIDService){
   this.checkuserID();
  }

  ngOnInit(): void {
    this.checkuserID();
  }

  checkuserID(){
    this.isUserLogged = this.UserSrv.checkUserLogged();
  }

  setUserID(){
    this.UserSrv.setUserID(this.userIDFilled);
    this.isUserLogged = true;
  }

}
