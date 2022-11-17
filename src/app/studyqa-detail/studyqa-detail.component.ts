import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Studyqa } from '../studyqa';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';

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

  constructor() {}

  ngOnInit(): void {
  }
  
}
