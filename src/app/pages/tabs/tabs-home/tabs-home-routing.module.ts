import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsHomePage } from './tabs-home.page';

const routes: Routes = [
  {
    path: '',
    component: TabsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsHomePageRoutingModule {}
