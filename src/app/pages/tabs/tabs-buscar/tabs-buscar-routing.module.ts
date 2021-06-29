import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsBuscarPage } from './tabs-buscar.page';

const routes: Routes = [
  {
    path: '',
    component: TabsBuscarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsBuscarPageRoutingModule {}
