import { Component, Input, numberAttribute } from '@angular/core';
import { cineCrearDTO, cineDTO } from '../cines';
import { FormCineComponent } from "../form-cine/form-cine.component";

@Component({
  selector: 'app-editar-cine',
  imports: [FormCineComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform:numberAttribute})
  id?:number;

  cine: cineDTO = {id:1,nombre:'Cinepolis'};

  guardarCambios(cine: cineCrearDTO){
    console.log("edit cine: ",cine)
  }
}
