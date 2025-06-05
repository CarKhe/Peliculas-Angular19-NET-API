import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { capitalString } from '../../compartidos/funciones/validaciones';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-form-actores',
  imports: [MatButtonModule,RouterLink,MatFormFieldModule,ReactiveFormsModule, MatInputModule,MatDatepickerModule], //1
  templateUrl: './form-actores.component.html',
  styleUrl: './form-actores.component.css'
})
export class FormActoresComponent {
  private formbuilder = inject(FormBuilder); //2

  //3
  form = this.formbuilder.group({
    nombre : ['',{validators:[Validators.required]}],
    fechaNacimiento: new FormControl<Date|null>(null)
  });

  guardar(){
    //code
  }
}
