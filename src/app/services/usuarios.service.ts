import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  enviaMensajeConsola(mensaje:string) {
    console.log(mensaje);
  }
}


