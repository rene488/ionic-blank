import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
<<<<<<< HEAD
    path: 'app',
    loadChildren: () => import('./pages/app/app.module').then( m => m.AppPageModule)
=======
    path: 'home' ,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
>>>>>>> d21d7d456a1b3a09660a7439763b1db7e68f97be
  },
 
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  },
<<<<<<< HEAD


=======
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
 
>>>>>>> d21d7d456a1b3a09660a7439763b1db7e68f97be

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
