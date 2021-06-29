import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsBuscarPageRoutingModule } from './tabs-buscar-routing.module';

import { TabsBuscarPage } from './tabs-buscar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsBuscarPageRoutingModule
  ],
  declarations: [TabsBuscarPage]
})
export class TabsBuscarPageModule {}
