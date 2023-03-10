import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';
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
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { CarrinhoService } from './services/carrinho.service';
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
    DescricaoReduzidaPipe,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [CarrinhoService,{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
