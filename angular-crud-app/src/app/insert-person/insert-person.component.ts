import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from "@angular/material/dialog";
import {NotifyInsertComponent} from "../notify-insert/notify-insert.component";

@Component({
  selector: 'app-insert-person',
  templateUrl: './insert-person.component.html',
  styleUrls: ['./insert-person.component.css']
})
export class InsertPersonComponent implements OnInit {

  startDate: any;
  readonly ROOT_URL = '/hello/persons';

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  insertPerson(newNombre: string, newApellido: string, newFecha: string){

    if (newNombre !== '' && newApellido !== '' && newFecha !== ''){
      console.log(newNombre, newApellido, newFecha);

      const postData = {
        nombre: newNombre,
        apellido: newApellido,
        nacimiento: newFecha
      };

      this.http.post(this.ROOT_URL, postData).toPromise().then(
        data => {
          console.log('se ha ingresado una persona');
        }
      );

      this.dialog.open(NotifyInsertComponent);
    }

  }

  ngOnInit(): void {}

}
