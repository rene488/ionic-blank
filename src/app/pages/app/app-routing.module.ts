  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPage } from './app.page';

const routes: Routes = [
  {
    path: '',
    component: AppPage,
    children: [
      {
        path: 'categoria-page',
        loadChildren: () => import('../../pages/categoria-page/categoria-page.module').then( m => m.CategoriaPagePageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('../../pages/tabs/tabs.module').then( m => m.TabsPageModule)
      }
     ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPageRoutingModule {}