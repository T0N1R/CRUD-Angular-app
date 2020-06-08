import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InsertPersonComponent} from './insert-person/insert-person.component';
import {SearchPersonComponent} from './search-person/search-person.component';
import {DeletePersonComponent} from './delete-person/delete-person.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'insert', component: InsertPersonComponent},
  {path: 'search', component: SearchPersonComponent},
  {path: 'delete', component: DeletePersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
