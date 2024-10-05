import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TerrestreComponent } from './components/terrestre/terrestre.component';
import { MaritimoComponent } from './components/maritimo/maritimo.component';
import { BodegaComponent } from './components/bodega/bodega.component';
import { PuertoComponent } from './components/puerto/puerto.components';
import { PaginaPrincipalComponent } from './pages/pagina/pagina-principal.component';

const routes: Routes = [
  { path: 'bodegas', component: BodegaComponent },
  { path: 'puertos', component: PuertoComponent },
  { path: 'envios-terrestres', component: TerrestreComponent },
  { path: 'envios-maritimos', component: MaritimoComponent },
  { path: 'clientes', component: ClienteComponent },
  {path:'',redirectTo:'/principal', pathMatch:'full'},
  {path:'inicio',component:DashboardComponent},
  {path:'iniciar-sesion',component:LoginComponent},
  {path:'principal',component:PaginaPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
