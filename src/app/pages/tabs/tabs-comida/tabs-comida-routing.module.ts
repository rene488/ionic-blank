import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsComidaPage } from './tabs-comida.page';

const routes: Routes = [
  {
    path: '',
    component: TabsComidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsComidaPageRoutingModule {}
