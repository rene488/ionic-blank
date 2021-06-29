import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetaCategoriaPagePageRoutingModule } from './receta-categoria-page-routing.module';

import { RecetaCategoriaPagePage } from './receta-categoria-page.page';
import { ListadoRecetasComponentComponent } from '../../components/listado-recetas-component/listado-recetas-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaCategoriaPagePageRoutingModule
  ],
  declarations: [RecetaCategoriaPagePage, ListadoRecetasComponentComponent],
  entryComponents:[ListadoRecetasComponentComponent]
})
export class RecetaCategoriaPagePageModule {}
