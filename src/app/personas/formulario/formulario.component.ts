import { Component } from '@angular/core';
import { Persona } from '../persona/persona.model';
import { PersonasService } from '../../services/personas.service';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

  nombreInput:string='';
  apellidoInput:string='';
  index:number;
  modoEdicion: number;

  constructor(private loggingService: UsuariosService,       
              private personasService: PersonasService,
              private router:Router,
              private route: ActivatedRoute){
                this.personasService.saludar.subscribe(
                  (indice:number) => alert(`El índice es ${indice}`)
                );
              } 

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion != null && this.modoEdicion === 1){
      let persona: Persona =  this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(){
    let nuevaPersona = new Persona(this.nombreInput, this.apellidoInput);
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.personasService.modificarPersona(this.index, nuevaPersona);
    } else {
      this.personasService.agregaPersona(nuevaPersona);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
      if(this.index != null){
        this.personasService.eliminarPersona(this.index);
      }
      this.router.navigate(['personas']);
  }
}







