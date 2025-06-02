import { CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoPeliculasComponent } from "./peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-root', // nombre del componente y se usa etiqueta html <app-root/>
  imports: [ListadoPeliculasComponent], //importaciones
  templateUrl: './app.component.html', //plantilla a utilizar
  styleUrl: './app.component.css' //plantilla css
})
export class AppComponent {


}
