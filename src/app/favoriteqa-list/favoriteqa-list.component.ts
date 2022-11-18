import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Favoriteqa } from '../favoriteqa';
import { FavoriteqaService } from '../favoriteqa.service';

@Component({
  selector: 'app-favoriteqa-list',
  templateUrl: './favoriteqa-list.component.html',
  styleUrls: ['./favoriteqa-list.component.css']
})
export class FavoriteqaListComponent implements OnInit {

  TheList:Favoriteqa[] = [];
  userLoggedIn:string = this.cookie.get('userID');

  constructor(private FavSrv:FavoriteqaService,private cookie:CookieService) { }

  ngOnInit(): void {
    this.userLoggedIn = this.cookie.get('userID');
    this.refresh();
  }


  deleteFav(q:Favoriteqa){
    this.FavSrv.Delete((result:any)=>{
      console.log('removed');
      this.refresh();
    },q.id);
  }


refresh(){
  this.userLoggedIn = this.cookie.get('userID');
  this.FavSrv.GetAll((result:any)=>{
    this.TheList = result;
    for(let i = 0;i<this.TheList.length;i++){
      if(this.TheList[i].userid !== this.cookie.get('userID')){
        this.TheList.splice(i,1);
      }
    }
  });
};

}
