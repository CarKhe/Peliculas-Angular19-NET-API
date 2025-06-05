import { Component, EventEmitter, inject, Input, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { capitalString } from '../../compartidos/funciones/validaciones';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import moment from 'moment';

@Component({
  selector: 'app-form-actores',
  imports: [MatButtonModule,RouterLink,MatFormFieldModule,ReactiveFormsModule, MatInputModule,MatDatepickerModule], //1
  templateUrl: './form-actores.component.html',
  styleUrl: './form-actores.component.css'
})
export class FormActoresComponent implements OnInit {
  ngOnInit(): void {
    if(this.model !== undefined) this.form.patchValue(this.model);
  }
  private formbuilder = inject(FormBuilder); //2

  @Input()
  model?:ActorDTO;


  @Output()
  posteoForm = new EventEmitter<ActorCreacionDTO>();
  //3
  form = this.formbuilder.group({
    nombre : ['',{validators:[Validators.required]}],
    fechaNacimiento: new FormControl<Date|null>(null)
  });

  guardar(){
    if(!this.form.valid) return;
    const actor = this.form.value as ActorCreacionDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();
    this.posteoForm.emit(actor);
  }
}
