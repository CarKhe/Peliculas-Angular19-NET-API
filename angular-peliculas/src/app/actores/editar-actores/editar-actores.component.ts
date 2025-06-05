import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormActoresComponent } from "../form-actores/form-actores.component";

@Component({
  selector: 'app-editar-actores',
  imports: [FormActoresComponent],
  templateUrl: './editar-actores.component.html',
  styleUrl: './editar-actores.component.css'
})
export class EditarActoresComponent {
  @Input({transform: numberAttribute})
  id!:number;

  actor:ActorDTO = {id:1,nombre:'Fede',fechaNacimiento: new Date('1999-5-5')};

  guardarCambios(actor: ActorCreacionDTO){
    console.log('Editando Actor', actor);
  }
}
