import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPersonComponent } from './search-person/search-person.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InsertPersonComponent } from './insert-person/insert-person.component';
import { HomeComponent } from './home/home.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { NotifyInsertComponent } from './notify-insert/notify-insert.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPersonComponent,
    NavBarComponent,
    InsertPersonComponent,
    HomeComponent,
    DeletePersonComponent,
    EditPersonComponent,
    NotifyInsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
