import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APIResponse } from './apiresponse';
import { Favoriteqa } from './favoriteqa';

@Injectable({
  providedIn: 'root'
})
export class FavoriteqaService {

  constructor(private http: HttpClient, private cookie:CookieService) { }

  API_URL: string = 'https://localhost:7279/favorite/';

  //GetAll 
  GetAll(cb: any) {
    this.http.get<Favoriteqa[]>(`${this.API_URL}`).subscribe(cb);
  }
  //Get
  Get(cb: any, id: number) {
    this.http.get<Favoriteqa>(`${this.API_URL}` + `${id}`).subscribe(cb);
  }
  //Update
  Update(cb: any, q: Favoriteqa) {
    this.http.put<APIResponse>(`${this.API_URL}`, q).subscribe(cb);
  }
  //delete
  Delete(cb: any, id: number) {
    this.http.delete<APIResponse>(`${this.API_URL}` + `${id}`).subscribe(cb);
  }
  //Create
  Create(cb: any, q: Favoriteqa) {
    this.http.post<Favoriteqa>(`${this.API_URL}`, q).subscribe(cb);
  }

  
}
