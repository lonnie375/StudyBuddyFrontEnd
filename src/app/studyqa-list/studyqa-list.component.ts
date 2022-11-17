import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Studyqa } from '../studyqa';
import { StudyqaService } from '../studyqa.service';
import { UserIDService } from '../user-id.service';

@Component({
  selector: 'app-studyqa-list',
  templateUrl: './studyqa-list.component.html',
  styleUrls: ['./studyqa-list.component.css']
})
export class StudyqaListComponent implements OnInit {
TheList:Studyqa[] = [];
addingNewQA:boolean = false;

newQuestion:string = '';
newAnswer:string='';

UserID = '';

  constructor(private QSrv:StudyqaService, private UserSrv:UserIDService) { }

  ngOnInit(): void {
    this.refresh()
    this.UserID = this.UserSrv.getUserID();
  }

  refresh(){
    this.QSrv.GetAll((result:any)=>{
      this.TheList = result;
    });
  };

  openForm(){
    this.addingNewQA = !this.addingNewQA
  }

  addQuestion(){
   let newAddQuestion:Studyqa = {
    id:0,
    question:this.newQuestion,
    answer:this.newAnswer
   };

    this.QSrv.Create((result:any)=>{
      this.refresh();
      console.log(result);
      this.newQuestion ='';
      this.newAnswer='';
    },newAddQuestion)
  }

  cancelCreate(){
    this.newQuestion ='';
    this.newAnswer='';
    this.addingNewQA = false;
  }

}
