import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPagePageRoutingModule } from './search-page-routing.module';

import { SearchPagePage } from './search-page.page';
import { ListadoRecetasComponentComponent } from '../../components/listado-recetas-component/listado-recetas-component.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPagePageRoutingModule
  ],
  declarations: [SearchPagePage, ListadoRecetasComponentComponent],
  entryComponents:[ListadoRecetasComponentComponent]
})
export class SearchPagePageModule {}
