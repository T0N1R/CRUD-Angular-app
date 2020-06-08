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

  ngOnInit(): void {
  }

}
