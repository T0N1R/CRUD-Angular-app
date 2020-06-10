import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {EditPersonComponent} from '../edit-person/edit-person.component';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {

  readonly ROOT_URL = '/hello/persons';

  personsList = [{idPersona: null, nombrePersona: '-', apellidoPersona: '-', fechaNacimiento: '-'}];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  getPersons(){
    this.personsList = [];
    this.http.get(this.ROOT_URL).toPromise().then(data => {
      const count = Object.keys(data).length;

      for (let n = 0; n < count; n++) {
        const sendToList = {
          idPersona: data[n].id, nombrePersona: data[n].nombre, apellidoPersona: data[n].apellido, fechaNacimiento: data[n].nacimiento
        };
        this.personsList.push(sendToList);
      }
    });
  }

  // borrar persona en base al id
  deletePerson(idBorrar: string){
    const value = idBorrar.substring(0, 36);
    return this.http.delete(`${this.ROOT_URL}/${value}`).toPromise().then(data => {
      this.getPersons();
    });
  }

  // el presionar el boton de editar, abre EditPersoncomponent, para poder modificar los campos de nombre, apellido y fecha
  editPerson(idPersona: string, nombrePersona: string, apellidoPersona: string, fechaNacimiento: string){
    // tslint:disable-next-line:max-line-length
    const dialogRef = this.dialog.open(EditPersonComponent, {data: {id: idPersona, nombre: nombrePersona, apellido: apellidoPersona, fecha: fechaNacimiento}});
    dialogRef.afterClosed().subscribe(result => {
      // se vuelve a correr getPersons()
      this.getPersons();
    });
  }


  ngOnInit(): void {
    this.getPersons();
  }

}
