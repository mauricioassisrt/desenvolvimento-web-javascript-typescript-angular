import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import {HttpModule} from "@angular/http";
import {RestaurantesComponent} from "./restaurantes/restaurantes.component";
import {DiversaoComponent} from "./diversao/diversao.component";
import {RouterModule} from "@angular/router";
import { ROUTES } from "./app.routes";
import { ComoUsarComponent } from './ofertas/como-usar/como-usar.component';
import { OndeFicaComponent } from './ofertas/onde-fica/onde-fica.component';
import {OfertaComponent} from "./ofertas/oferta.component";
import {DescricaoReduzidaPipe} from "./util/descricao.reduzida.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    OfertaComponent,
    DescricaoReduzidaPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
