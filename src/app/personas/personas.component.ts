import { Component, OnInit } from '@angular/core';
import { Persona } from './persona/persona.model';
import { PersonasService } from '../services/personas.service';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];
  
  constructor(private loggingService: UsuariosService,
              private personasService: PersonasService,
              private router: Router) {}

  ngOnInit(): void {
    // this.personas = this.personasService.personas;  
    this.personasService.obtenerPersonas().subscribe( (personas: Object) => {
      this.personas = personas as Persona[];
      this.personasService.setPersonas(personas as Persona[]);
    });
    
  }

  agregar(){
    this.router.navigate(['personas/agregar']);
  }

}
 
