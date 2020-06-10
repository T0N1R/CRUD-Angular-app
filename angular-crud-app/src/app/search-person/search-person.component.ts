import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {

  readonly ROOT_URL = '/hello/persons';

  personsList = [{idPersona: null, nombrePersona: '-', apellidoPersona: '-', fechaNacimiento: '-'}];

  constructor(private http: HttpClient) { }

  // http request GET que obtiene todos las personas y la agrega en la lista personList para presentar en la tabla
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

  // de la lista llenada por el request get, obtener el
  getPersonsById(idValue: string){
    this.personsList = [];
    this.http.get(this.ROOT_URL).toPromise().then(data => {
      const count = Object.keys(data).length;

      for (let n = 0; n < count; n++) {
        const sendToList = {
          idPersona: data[n].id, nombrePersona: data[n].nombre, apellidoPersona: data[n].apellido, fechaNacimiento: data[n].nacimiento
        };
        const lookingForId = sendToList.idPersona;
        if (lookingForId === idValue){
          this.personsList.push(sendToList);
        }
      }
    });

    this.http.get(this.ROOT_URL + '/' + idValue).toPromise().then(data => {
      console.log(data);
    });
  }

  getPersonByName(nameValue: string){
    this.personsList = [];
    this.http.get(this.ROOT_URL).toPromise().then(data => {
      const count = Object.keys(data).length;

      for (let n = 0; n < count; n++) {
        const sendToList = {
          idPersona: data[n].id, nombrePersona: data[n].nombre, apellidoPersona: data[n].apellido, fechaNacimiento: data[n].nacimiento
        };
        const lookingForId = sendToList.nombrePersona;
        if (lookingForId === nameValue){
          this.personsList.push(sendToList);
        }
      }
    });
  }

  getPersonByLastName(lastnameValue: string){
    this.personsList = [];
    this.http.get(this.ROOT_URL).toPromise().then(data => {
      const count = Object.keys(data).length;

      for (let n = 0; n < count; n++) {
        const sendToList = {
          idPersona: data[n].id, nombrePersona: data[n].nombre, apellidoPersona: data[n].apellido, fechaNacimiento: data[n].nacimiento
        };
        const lookingForId = sendToList.apellidoPersona;
        if (lookingForId === lastnameValue){
          this.personsList.push(sendToList);
        }
      }
    });
  }

  getPersonByDate(dateValue: string){
    this.personsList = [];
    this.http.get(this.ROOT_URL).toPromise().then(data => {
      const count = Object.keys(data).length;

      for (let n = 0; n < count; n++) {
        const sendToList = {
          idPersona: data[n].id, nombrePersona: data[n].nombre, apellidoPersona: data[n].apellido, fechaNacimiento: data[n].nacimiento
        };
        const lookingForId = sendToList.fechaNacimiento;
        if (lookingForId === dateValue){
          this.personsList.push(sendToList);
        }
      }
    });
  }

  ngOnInit(): void {
    this.getPersons();
  }

}
