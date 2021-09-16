import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorComponent } from './contador/contador/contador.component';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,

  ],
  imports: [
        //solo mandamos a traer la expotación que estamos haciendo y es heroes.module.ts
        //es la carpeta principal y pueda ser visible
    ContadorModule,
    HeroesModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
