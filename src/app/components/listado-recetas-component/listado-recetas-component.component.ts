import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-recetas-component',
  templateUrl: './listado-recetas-component.component.html',
  styleUrls: ['./listado-recetas-component.component.scss'],
})
export class ListadoRecetasComponentComponent implements OnInit {

  fakeArray = [1,1,1,1,1,1];

  constructor() { }

  ngOnInit() {}

}
