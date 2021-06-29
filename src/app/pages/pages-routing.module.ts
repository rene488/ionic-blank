import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
<<<<<<< HEAD
    path: 'categoria-page',
    loadChildren: () => import('./categoria-page/categoria-page.module').then( m => m.CategoriaPagePageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./app/app.module').then( m => m.AppPageModule)
  },
  
=======
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'receta-categoria-page',
    loadChildren: () => import('./receta-categoria-page/receta-categoria-page.module').then( m => m.RecetaCategoriaPagePageModule)
  },
  {
    path: 'search-page',
    loadChildren: () => import('./search-page/search-page.module').then( m => m.SearchPagePageModule)
  },
  {
    path: 'receta-detalle-page',
    loadChildren: () => import('./receta-detalle-page/receta-detalle-page.module').then( m => m.RecetaDetallePagePageModule)
  }
>>>>>>> d21d7d456a1b3a09660a7439763b1db7e68f97be
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
