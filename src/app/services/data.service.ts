import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../personas/persona/persona.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient,
              private loginService: LoginService) {}

  cargarPersonas(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://listado-personas-caae3-default-rtdb.firebaseio.com/datos.json?auth=' + token);
  }

  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put('https://listado-personas-caae3-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas)
      .subscribe(
        (response) => {
          console.log(`Resultado guardar personas: ${response}`);
        },
        (error) => console.log(`Error al guardar personas: ${error}`)
      );
  }

  modificarPersona(index: number, persona: Persona){
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-caae3-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.put(url, persona).subscribe(
      response => { console.log(`Resultado de modificar Persona: ${response}`)},
      error => { console.log(`Error al modificar Persona: ${error}`)}
    );
  }

  eliminarPersona(index: number){
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-caae3-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.delete(url).subscribe(
      response => { console.log(`Resultado de eliminar Persona: ${response}`)},
      error => { console.log(`Error al eliminar Persona: ${error}`)}
    );
  }
}


