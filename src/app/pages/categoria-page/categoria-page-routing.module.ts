import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaPagePage } from './categoria-page.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaPagePageRoutingModule {}
