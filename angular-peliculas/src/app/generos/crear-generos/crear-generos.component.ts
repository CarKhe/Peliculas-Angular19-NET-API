import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule,RouterLink,MatFormFieldModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  private router = inject(Router); //Inyeccion de la dependecia del ruteo ya creado (Centraliza la instacia de la logica de servicios)

  //Formulario Reactivo de Angular Inyecion de la creacion del formulario
  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: ['',{validators:[Validators.required]}]
  });

  obtenerErrorNombre():string{
    let nombre = this.form.controls.nombre;
    if(nombre.hasError('required')){
      return "Campo nombre Requerido Campo nombre Requerido Campo nombre Requerido Campo nombre Requerido Campo nombre Requerido Campo nombre Requerido ";
    }
    return "";
  }
  guardarCambios(){
    //guardar los cambios de la consulta a la api de .net
    //this.router.navigate(['/generos']);
    console.log(this.form.value);
  }
}
