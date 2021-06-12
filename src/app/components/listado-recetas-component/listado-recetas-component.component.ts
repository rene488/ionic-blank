import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-recetas-component',
  templateUrl: './listado-recetas-component.component.html',
  styleUrls: ['./listado-recetas-component.component.scss'],
})
export class ListadoRecetasComponentComponent implements OnInit {

  fakeArray = [1,1,1,1,1,1];

  constructor(public router: Router) { }

  ngOnInit() {}

  goToRecetaDetallePage() {
    this.router.navigate(['/receta-detalle-page']);
  }

}
