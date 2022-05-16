import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';

//npm start
const urlApi = '/api/personas';

//ng serve
//const urlApi = 'http://localhost:8081/api/personas';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Persona> {
    return this.http.get<Persona>(urlApi);
  }

  add(persona: Persona) {
    return this.http.post<Persona>(urlApi, persona);
  }
}
