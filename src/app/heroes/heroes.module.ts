import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  //componentes que tengo en mis carpetas que tenga dentro de mi carpeta raíz
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],
  exports:[
    //que cosas quiero hacer publicas fuera de la carpeta
    ListadoComponent
  ],
  imports:[
    //TODOS LOS Modulos
    /*El CommonMudule ofrece las directivas de angular*/
    CommonModule
  ]

})

//Nombre de nuestra clase dependiendo de la capeta principal
export class HeroesModule{

}
