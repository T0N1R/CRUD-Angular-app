import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPersonComponent } from './search-person/search-person.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InsertPersonComponent } from './insert-person/insert-person.component';
import { HomeComponent } from './home/home.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPersonComponent,
    NavBarComponent,
    InsertPersonComponent,
    HomeComponent,
    DeletePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
