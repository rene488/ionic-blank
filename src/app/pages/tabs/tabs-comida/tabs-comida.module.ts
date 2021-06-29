import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsComidaPageRoutingModule } from './tabs-comida-routing.module';

import { TabsComidaPage } from './tabs-comida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsComidaPageRoutingModule
  ],
  declarations: [TabsComidaPage]
})
export class TabsComidaPageModule {}
