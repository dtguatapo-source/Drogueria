import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Inventario } from './pages/inventario/inventario';
import { Compras } from './pages/compras/compras';
import { Ventas } from './pages/ventas/ventas';
import { Informes } from './pages/informes/informes';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'inventario', component: Inventario },
  { path: 'compras', component: Compras },
  { path: 'ventas', component: Ventas },
  { path: 'informes', component: Informes },
  { path: '**', redirectTo: '' }
];