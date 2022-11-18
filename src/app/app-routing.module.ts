import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FavoriteqaListComponent } from './favoriteqa-list/favoriteqa-list.component';
import { StudyqaListComponent } from './studyqa-list/studyqa-list.component';


const routes: Routes = [
  { path: '', component: StudyqaListComponent},
  {path:'favorite', component:FavoriteqaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }