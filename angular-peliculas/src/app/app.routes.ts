import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { ListadoActoresComponent } from './actores/listado-actores/listado-actores.component';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { ListadoCineComponent } from './cines/listado-cine/listado-cine.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarGenerosComponent } from './generos/editar-generos/editar-generos.component';

export const routes: Routes = [
    {path: '',component:LandingPageComponent},

    {path: 'actores',component:ListadoActoresComponent},
    {path: 'actores/crear',component:CrearActoresComponent},
    {path: 'actores/editar/:id',component:CrearActoresComponent},
    
    {path: 'cines',component: ListadoCineComponent},
    {path: 'cines/crear',component:CrearCineComponent},

    {path: 'generos',component:IndiceGenerosComponent},
    {path: 'generos/crear',component:CrearGenerosComponent},
    {path: 'generos/editar/:id',component:EditarGenerosComponent}, //Capacidad de añadir el atributo para su modificacion
    
    {path: 'peliculas',component:ListadoPeliculasComponent},
    {path: 'peliculas/crear',component:CrearPeliculaComponent},


    {path: '**', redirectTo:''} //Se puede agrtegar un componente 404 etc o redirigir automaticamente
];
