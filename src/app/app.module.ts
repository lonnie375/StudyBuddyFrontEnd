import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { StudyqaListComponent } from './studyqa-list/studyqa-list.component';
import { StudyqaDetailComponent } from './studyqa-detail/studyqa-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CookieService } from 'ngx-cookie-service';
import { FavoriteqaDetailComponent } from './favoriteqa-detail/favoriteqa-detail.component';
import { FavoriteqaListComponent } from './favoriteqa-list/favoriteqa-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StudyqaListComponent,
    StudyqaDetailComponent,
    FavoriteqaDetailComponent,
    FavoriteqaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
