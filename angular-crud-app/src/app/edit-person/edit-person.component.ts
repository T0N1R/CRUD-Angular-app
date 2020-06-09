import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  startDate: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) { }

  putPerson(constantID: string, newNombre: string, newApellido: string, newFecha: string){
    const putData = {
      nombre: newNombre,
      apellido: newApellido,
      nacimiento: newFecha
    };

    const ROOT_URL = '/hello/persons/' + constantID;

    this.http.put(ROOT_URL, putData).toPromise().then(
      data => {
        console.log('se ha modificado una persona');
      }
    );
  }

  ngOnInit(): void {}



}
