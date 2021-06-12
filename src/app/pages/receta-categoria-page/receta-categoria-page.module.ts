import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaCategoriaPagePageRoutingModule } from './receta-categoria-page-routing.module';

import { RecetaCategoriaPagePage } from './receta-categoria-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaCategoriaPagePageRoutingModule
  ],
  declarations: [RecetaCategoriaPagePage]
})
export class RecetaCategoriaPagePageModule {}
