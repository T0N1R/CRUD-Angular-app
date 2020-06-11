import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '0', name: '-', weight: '-', symbol: '-'},
];

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  readonly ROOT_URL = '/hello/persons';

  personsList = [{idPersona: null, nombrePersona: '-', apellidoPersona: '-', fechaNacimiento: '-'}];
  personsTable = [];

  constructor(private http: HttpClient) { }

  // http request GET que obtiene todos las personas y la agrega en la lista personList para presentar en la tabla
  getPersons(){
    this.personsList = [];
    this.http.get(this.ROOT_URL).toPromise().then(data => {
      const count = Object.keys(data).length;

      for (let n = 0; n < count; n++) {
        const sendToList = {position: data[n].nombre, name: data[n].apellido, weight: data[n].nacimiento, symbol: data[n].id};
        this.personsTable.push(sendToList);
      }

      const newELEMENT: PeriodicElement[] = this.personsTable;

      this.dataSource = newELEMENT;

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
