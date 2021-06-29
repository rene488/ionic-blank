import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaCategoriaPagePage } from './receta-categoria-page.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaCategoriaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaCategoriaPagePageRoutingModule {}
