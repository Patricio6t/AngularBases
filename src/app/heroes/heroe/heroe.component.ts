import { Component } from "@angular/core";


@Component({
  selector:'app-heroe',
  templateUrl:'heroe.component.html',
  styleUrls: ['../../app.component.css'],

})
export class HeroeComponent{

nombre: string = 'Ironman';
edad: number = 40


/*Creo una proiedad que va a hacer procesada
mando a traer el nombre y le agrego el letras mayusculas
*/
get nombreCapitlizado(){
  return this.nombre.toUpperCase();
}

  obtenerNombre():string {
    //Contatenamos Nombre y edad

    return `${this.nombre } - ${this.edad} `;
  }

  cambiarNombre():void{
    this.nombre= 'Spiderman';
  }
  cambiarEdad():void{
    this.edad=50;
  }

}
