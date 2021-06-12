import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaDetallePagePage } from './receta-detalle-page.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaDetallePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaDetallePagePageRoutingModule {}
