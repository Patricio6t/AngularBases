import { hostViewClassName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListadoComponent {
heroes: string []= ['Spiderman','Super man ', 'Ironman', 'Hulk', 'Goku'];
borradoHeroe:string = '';


  BorrarHeroe(){

    this.borradoHeroe =    this.heroes.shift() || '';
    //this.heroes.length = this.heroes.length -1;

  }

}


