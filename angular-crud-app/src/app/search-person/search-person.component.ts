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
    this.personsTable = [];
    this.http.get(this.ROOT_URL).toPromise().then(data => {
      const count = Object.keys(data).length;

      for (let n = 0; n < count; n++) {
        const sendToList = {position: data[n].nombre, name: data[n].apellido, weight: data[n].nacimiento, symbol: data[n].id};
        const lookingForId = sendToList.symbol;
        this.personsTable.push(sendToList);
      }

      const newELEMENT: PeriodicElement[] = this.personsTable;

      this.dataSource = newELEMENT;

    });
  }

  // de la lista llenada por el request get, obtener el
  getPersonsById(idValue: string){
    this.personsTable = [];
    this.http.get(this.ROOT_URL).toPromise().then(data => {
      const count = Object.keys(data).length;

      for (let n = 0; n < count; n++) {
        const sendToList = {position: data[n].nombre, name: data[n].apellido, weight: data[n].nacimiento, symbol: data[n].id};
        const lookingForId = sendToList.symbol;
        if (lookingForId === idValue){
          this.personsTable.push(sendToList);
        }
      }

      const newELEMENT: PeriodicElement[] = this.personsTable;

      this.dataSource = newELEMENT;

    });

    this.http.get(this.ROOT_URL + '/' + idValue).toPromise().then(data => {
      console.log(data);
    });
  }

  getPersonByName(nameValue: string){
    this.personsTable = [];
    this.http.get(this.ROOT_URL).toPromise().then(data => {
      const count = Object.keys(data).length;

      for (let n = 0; n < count; n++) {
        const sendToList = {position: data[n].nombre, name: data[n].apellido, weight: data[n].nacimiento, symbol: data[n].id};
        const lookingForName = sendToList.position;
        if (lookingForName === nameValue){
          this.personsTable.push(sendToList);
        }
      }

      const newELEMENT: PeriodicElement[] = this.personsTable;

      this.dataSource = newELEMENT;

    });
  }

  getPersonByLastName(lastnameValue: string){
    this.personsTable = [];
    this.http.get(this.ROOT_URL).toPromise().then(data => {
      const count = Object.keys(data).length;

      for (let n = 0; n < count; n++) {
        const sendToList = {position: data[n].nombre, name: data[n].apellido, weight: data[n].nacimiento, symbol: data[n].id};
        const lookingForLastName = sendToList.name;
        if (lookingForLastName === lastnameValue){
          this.personsTable.push(sendToList);
        }
      }

      const newELEMENT: PeriodicElement[] = this.personsTable;

      this.dataSource = newELEMENT;

    });
  }

  getPersonByDate(dateValue: string){
    this.personsTable = [];
    this.http.get(this.ROOT_URL).toPromise().then(data => {
      const count = Object.keys(data).length;

      for (let n = 0; n < count; n++) {
        const sendToList = {position: data[n].nombre, name: data[n].apellido, weight: data[n].nacimiento, symbol: data[n].id};
        const lookingForDate = sendToList.weight;
        if (lookingForDate === dateValue){
          this.personsTable.push(sendToList);
        }
      }

      const newELEMENT: PeriodicElement[] = this.personsTable;

      this.dataSource = newELEMENT;

    });
  }

  mostrarTodos(){
    this.getPersons();
    console.log('yes');
  }


  ngOnInit(): void {
    this.getPersons();
  }

}
