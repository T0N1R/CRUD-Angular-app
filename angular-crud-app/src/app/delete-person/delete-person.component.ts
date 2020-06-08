import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {

  readonly ROOT_URL = '/hello/persons';
  readonly ROOT_DELETE = '/hello/persons/ce9cdafa-03f9-4db1-bf9c-7894ee8c2c4a';

  personsList = [{idPersona: null, nombrePersona: '-', apellidoPersona: '-', fechaNacimiento: '-'}];

  constructor(private http: HttpClient) { }

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

  deletePerson(idBorrar: string){
    console.log('-----');
    console.log(idBorrar);
    console.log('-----');
    const value = idBorrar.substring(0, 36);
    console.log(value);
    console.log(this.ROOT_DELETE);
    // this.http.delete<void>(`${this.ROOT_URL}/${value}`);
    return this.http.delete(`${this.ROOT_URL}/${value}`).toPromise().then(data => {
      this.getPersons();
    });
    // this.getPersons();
  }

  ngOnInit(): void {
    this.getPersons();
  }

}
