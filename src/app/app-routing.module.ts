import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home' ,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'receta-categoria-page',
    loadChildren: () => import('./pages/receta-categoria-page/receta-categoria-page.module').then( m => m.RecetaCategoriaPagePageModule)
  },
  {
    path: 'search-page',
    loadChildren: () => import('./pages/search-page/search-page.module').then( m => m.SearchPagePageModule)
  },
  {
    path: 'receta-detalle-page',
    loadChildren: () => import('./pages/receta-detalle-page/receta-detalle-page.module').then( m => m.RecetaDetallePagePageModule)
  }
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
