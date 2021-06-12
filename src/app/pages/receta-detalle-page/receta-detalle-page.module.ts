import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaDetallePagePageRoutingModule } from './receta-detalle-page-routing.module';

import { RecetaDetallePagePage } from './receta-detalle-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaDetallePagePageRoutingModule
  ],
  declarations: [RecetaDetallePagePage]
})
export class RecetaDetallePagePageModule {}
