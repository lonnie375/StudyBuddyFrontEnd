import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse } from './apiresponse';
import { Studyqa } from './studyqa';

@Injectable({
  providedIn: 'root'
})
export class StudyqaService {

  constructor(private http:HttpClient) {}

   API_URL:string = 'https://localhost:7279/'; 

  //GetAll 
  GetAll(cb:any){
    this.http.get<Studyqa[]>(`${this.API_URL}`+'study').subscribe(cb);
  }
  //Get
  Get(cb:any,id:number){
    this.http.get<Studyqa>(`${this.API_URL}`+'study'+`/${id}`).subscribe(cb);
  }
  //Update
  Update(cb:any, q:Studyqa){
    this.http.put<APIResponse>(`${this.API_URL}`+'study',q).subscribe(cb);
  }
  //delete
  Delete(cb:any,id:number){
    this.http.delete<APIResponse>(`${this.API_URL}`+'study'+`/${id}`).subscribe(cb);
  }
  //Create
  Create(cb:any,q:Studyqa){
    this.http.post<Studyqa>(`${this.API_URL}`+'study',q).subscribe(cb);
  }
}
