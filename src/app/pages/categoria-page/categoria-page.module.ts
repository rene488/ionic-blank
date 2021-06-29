import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaPagePageRoutingModule } from './categoria-page-routing.module';

import { CategoriaPagePage } from './categoria-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaPagePageRoutingModule
  ],
  declarations: [CategoriaPagePage]
})
export class CategoriaPagePageModule {}
