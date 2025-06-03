import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule,NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {
  ngOnInit(): void {
    this.maxRatingArreglo = Array(this.maxRating).fill(0); //creacion de la lista en el inicio del componente
  }
  @Input({required:true})
  maxRating !: number;  //Cantidad Maxima de estrellas 

  @Input()
  ratinSeleccionado = 0; //Calificacion dada 

  maxRatingArreglo : any[] = []; //Arreglo para la creacion de la lista 

  ratingAnterior = 0; // ultima calificacion dada

  //el rating que muestra al dejar por encima el mouse 
  manejarMouseEnter(index: number){
    this.ratinSeleccionado = index + 1; 

  }

  //si la calificacion es diferente a 0 el seleccionado se deja como el anterior
  //pero si el anterior es 0, el seleccionado se mantiene en 0
  manejarMouseLeave(){
    if(this.ratingAnterior !== 0){
      this.ratinSeleccionado = this.ratingAnterior;
    } else{
      this.ratinSeleccionado = 0;
    }
  }

  //al darle click a una calificacion la ultima calificacion se transfroma al clickeado
  manejarClick(index: number){
    this.manejarMouseEnter(index);
    this.ratingAnterior = this.ratinSeleccionado;
  }
}
