import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsComprasPage } from './tabs-compras.page';

const routes: Routes = [
  {
    path: '',
    component: TabsComprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsComprasPageRoutingModule {}
