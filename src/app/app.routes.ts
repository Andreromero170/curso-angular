import { Routes } from '@angular/router';
import { FormularioComponent } from '../componentes/formulario/formulario.component';
import { InicioComponent } from '../componentes/inicio/inicio.component';
import { ListaComponent } from '../componentes/lista/lista.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { UserListComponent } from '../componentes/user-list/user-list.component';
import { ProductListComponent } from '../componentes/product-list/product-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'if', component: FormularioComponent },
  { path: 'for', component: ListaComponent },
  { path: 'swith', component: PedidosComponent },
  { path: 'ngclass', component: UserListComponent },
  { path: 'interface', component: ProductListComponent },

];
