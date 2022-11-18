import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { Favoriteqa } from '../favoriteqa';
import { FavoriteqaService } from '../favoriteqa.service';

@Component({
  selector: 'app-favoriteqa-detail',
  templateUrl: './favoriteqa-detail.component.html',
  styleUrls: ['./favoriteqa-detail.component.css']
})
export class FavoriteqaDetailComponent implements OnInit {

@Input() FavQ:Favoriteqa = {
  id: 0,
  question:'',
  answer:'',
  userid: this.cookie.get('userID')
}

@Output() delete:EventEmitter<Favoriteqa> = new EventEmitter<Favoriteqa>();

faCoffee = faHeart;

  constructor(private FavSrv:FavoriteqaService, private cookie:CookieService) {}

  ngOnInit(): void {
  }

  removeFromFav(){
    this.delete.emit(this.FavQ);
  }

}
