import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-receta-detalle-page',
  templateUrl: './receta-detalle-page.page.html',
  styleUrls: ['./receta-detalle-page.page.scss'],
})
export class RecetaDetallePagePage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView:3.5
  };

  fakeIngredientes = [1,1,1,1,1,1,1];

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.pop();
  }

}
