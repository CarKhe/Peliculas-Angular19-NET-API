import { Component } from '@angular/core';
import { FormPeliculaComponent } from "../form-pelicula/form-pelicula.component";
import { PeliculasCrearDTO } from '../peliculas';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormPeliculaComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {
  
  guardarCambios(pelicula:PeliculasCrearDTO){
    console.log("Creando Pelicula: ",pelicula)
  }
}
