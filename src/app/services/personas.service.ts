import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from '../personas/persona/persona.model';
import { DataService } from './data.service';
import { UsuariosService } from './usuarios.service';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  
  saludar = new EventEmitter<number>();

  constructor(private loggingService: UsuariosService, private dataServices: DataService) { }

  personas:Persona[] = [];

  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  obtenerPersonas(){
    return this.dataServices.cargarPersonas();   
  }

  agregaPersona(persona:Persona){
    this.personas.push(persona);
    this.loggingService.enviaMensajeConsola(`Agregamos la persona: ${persona.nombre} ${persona.apellido}`);
    this.dataServices.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number) {
    let persona:Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let nuevaPersona = this.personas[index];
    nuevaPersona.nombre = persona.nombre;
    nuevaPersona.apellido = persona.apellido; 
    this.dataServices.modificarPersona(index, persona);  
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    this.recargarArregloPersonas();
  }

  recargarArregloPersonas(){
    if(this.personas != null){
      this.dataServices.guardarPersonas(this.personas);
    }
  }
}




    



