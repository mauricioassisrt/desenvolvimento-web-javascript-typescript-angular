import {Routes} from '@angular/router';
import {AcessoComponent} from './acesso/acesso.component';
import {HomeComponent} from './acesso/home/home.component';
import {AutenticacaoGuard} from './autenticacao-guard.service';

export const ROUTES: Routes = [
    {path: '', component: AcessoComponent},
    {path: 'home', component: HomeComponent, canActivate: [AutenticacaoGuard]}
]
