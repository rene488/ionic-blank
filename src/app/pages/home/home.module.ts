import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD:src/app/pages/app/app.module.ts
=======

import { IonicModule } from '@ionic/angular';
>>>>>>> d21d7d456a1b3a09660a7439763b1db7e68f97be:src/app/pages/home/home.module.ts

import { IonicModule } from '@ionic/angular';

import { AppPageRoutingModule } from './app-routing.module';

<<<<<<< HEAD:src/app/pages/app/app.module.ts
import { AppPage } from './app.page';
=======
import { HomePage } from './home.page';
import { ListadoRecetasComponentComponent } from '../../components/listado-recetas-component/listado-recetas-component.component';
>>>>>>> d21d7d456a1b3a09660a7439763b1db7e68f97be:src/app/pages/home/home.module.ts

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppPageRoutingModule
  ],
<<<<<<< HEAD:src/app/pages/app/app.module.ts
  declarations: [AppPage]
=======
  declarations: [HomePage, ListadoRecetasComponentComponent],
  entryComponents:[ListadoRecetasComponentComponent]
>>>>>>> d21d7d456a1b3a09660a7439763b1db7e68f97be:src/app/pages/home/home.module.ts
})
export class AppPageModule {}
