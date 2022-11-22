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

  constructor(private FavSrv:FavoriteqaService,private cookie:CookieService) {}

  ngOnInit(): void {
    this.refresh();
  }


  deleteFav(q:Favoriteqa){
    this.FavSrv.Delete((result:any)=>{
      this.refresh();
    },q.id);
  }


refresh(){
  this.userLoggedIn = this.cookie.get('userID');
  this.FavSrv.GetAll((result:Favoriteqa[])=>{
    this.TheList = [];
    for(let i = 0;i<result.length;i++){
      if(result[i].userid === this.cookie.get('userID')){
        this.TheList.push(result[i])
      }
    }
  });
};

}
