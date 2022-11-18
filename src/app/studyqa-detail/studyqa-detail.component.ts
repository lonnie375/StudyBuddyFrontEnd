import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Studyqa } from '../studyqa';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { FavoriteqaService } from '../favoriteqa.service';
import { Favoriteqa } from '../favoriteqa';

@Component({
  selector: 'app-studyqa-detail',
  templateUrl: './studyqa-detail.component.html',
  styleUrls: ['./studyqa-detail.component.css']
})
export class StudyqaDetailComponent implements OnInit {

faCoffee = faHeart;

  @Input() Question:Studyqa = {
    id:0,
    question:'',
    answer:''
  }

  constructor(private cookie:CookieService, private FavSrv:FavoriteqaService) {}

  ngOnInit(): void {}


  saveToFav(){
    let newQ:Favoriteqa ={
      id:0,
      question: this.Question.question,
      answer:this.Question.answer,
      userid:this.cookie.get('userID')
    }
    
    this.FavSrv.Create((result:any)=>{
      console.log('Set as fav')
    },newQ)
  }
  
}
