import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      
     {
        path: 'tabs-comida',
        loadChildren: () => import('./tabs-comida/tabs-comida.module').then( m => m.TabsComidaPageModule)
     },
     {
       path: '',
       redirectTo: '/tabs/tabs-comida',
       pathMatch: 'full'
     },
 
     {
        path: 'tabs-home',
        loadChildren: () => import('./tabs-home/tabs-home.module').then( m => m.TabsHomePageModule)
     },
     {
        path: 'tabs-user',
        loadChildren: () => import('./tabs-user/tabs-user.module').then( m => m.TabsUserPageModule)
     },
     {
        path: 'tabs-buscar',
        loadChildren: () => import('./tabs-buscar/tabs-buscar.module').then( m => m.TabsBuscarPageModule)
     },
     {
        path: 'tabs-compras',
        loadChildren: () => import('./tabs-compras/tabs-compras.module').then( m => m.TabsComprasPageModule)
     },
   ]
  }, 
  {
       path: '',
       redirectTo: '/tabs/tabs-comida',
       pathMatch: 'full'
     },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
