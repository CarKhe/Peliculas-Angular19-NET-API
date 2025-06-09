import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-filtro-peliculas',
  imports: [MatButtonModule,MatFormField,ReactiveFormsModule,MatInputModule,MatSelectModule,MatCheckboxModule],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    titulo:'',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  });

  generos =[
    {id: 1,genero:"Drama"},
    {id: 2,genero:"Accion"},
    {id: 3,genero:"Comedia"}
  ]
}
