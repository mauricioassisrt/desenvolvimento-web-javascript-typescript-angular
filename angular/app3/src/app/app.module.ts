import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AcessoComponent} from './acesso/acesso.component';
import {BannerComponent} from './acesso/banner/banner.component';
import {LoginComponent} from './acesso/login/login.component';
import {CadastroComponent} from './acesso/cadastro/cadastro.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {AutenticacaoService} from './acesso/autenticacao.service';
import {HomeComponent} from './acesso/home/home.component';
import {PublicacoesComponent} from './acesso/home/publicacoes/publicacoes.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {AutenticacaoGuard} from './autenticacao-guard.service';
import {IncluirPublicaoComponent} from './acesso/home/incluir-publicacao/incluir-publicacao.component';
import {Bd} from './bd.service';
import {Progresso} from './progresso.service';

@NgModule({
    declarations: [
        AppComponent,
        AcessoComponent,
        BannerComponent,
        LoginComponent,
        CadastroComponent,
        HomeComponent,
        PublicacoesComponent,
        IncluirPublicaoComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [AutenticacaoService, AutenticacaoGuard, Bd, Progresso],
    bootstrap: [AppComponent]
})
export class AppModule {
}
