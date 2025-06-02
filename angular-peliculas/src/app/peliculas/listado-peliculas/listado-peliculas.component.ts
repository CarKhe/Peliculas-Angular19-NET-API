import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, ListadoGenericoComponent,MatButtonModule,MatIconModule,MatTooltip],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {
  @Input({required:true})
  peliculas !: any[];

  agregarPelicula(){
    this.peliculas.push({
        nombre: 'Una Pelicula de Minecraft',
        fecha: new Date("2025-04-30"),
        precio: 150.23,
        
    });
  }

  remover($index: number){
    this.peliculas.splice($index,1)
  }
}
