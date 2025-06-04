import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  router = inject(Router); //Inyeccion de la dependecia del ruteo ya creado (Centraliza la instacia de la logica de servicios)

  guardarCambios(){
    //guardar los cambios de la consulta a la api de .net
    this.router.navigate(['/generos']);
  }
}
