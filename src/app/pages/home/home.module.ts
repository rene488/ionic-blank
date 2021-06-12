import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ListadoRecetasComponentComponent } from '../../components/listado-recetas-component/listado-recetas-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ListadoRecetasComponentComponent],
  entryComponents:[ListadoRecetasComponentComponent]
})
export class HomePageModule {}
