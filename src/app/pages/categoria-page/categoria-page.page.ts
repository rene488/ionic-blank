import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-page',
  templateUrl: './categoria-page.page.html',
  styleUrls: ['./categoria-page.page.scss'],
})
export class CategoriaPagePage implements OnInit {

  segmento = 'hamburguesas';
         

  productos = [
    {id: '1', nombre: 'Hamburguesa', img: 'https://thumbs.dreamstime.com/b/hamburguesa-en-el-fondo-blanco-54090128.jpg', precio: 5, cantidad: 1, categoria: 'hamburguesas'},
    {id: '2', nombre: 'Hamburguesa', img: 'https://thumbs.dreamstime.com/b/hamburguesa-en-el-fondo-blanco-54090128.jpg', precio: 5, cantidad: 1, categoria: 'hamburguesas'},
    {id: '3', nombre: 'Hamburguesa', img: 'https://thumbs.dreamstime.com/b/hamburguesa-en-el-fondo-blanco-54090128.jpg', precio: 5, cantidad: 1, categoria: 'hamburguesas'},
    {id: '4', nombre: 'Pizza', img: 'https://previews.123rf.com/images/gbh007/gbh0071709/gbh007170901127/85530046-salchich%C3%B3n-de-pizza-con-tomate-y-champi%C3%B1ones-sobre-fondo-blanco.jpg', precio: 10, cantidad: 1, categoria: 'pizzas'},
    {id: '5', nombre: 'Papas fritas', img: 'https://static.vecteezy.com/system/resources/previews/002/199/006/non_2x/hot-french-fries-on-white-background-photo.jpg', precio: 4, cantidad: 1, categoria: 'adicionales'},
    {id: '6', nombre: 'Merengadas frutales', img:'https://thumbs.dreamstime.com/z/vidrios-con-batidos-de-leche-en-el-fondo-blanco-120063958.jpg', precio: 3, cantidad: 1, categoria: 'bebidas'},
   
  ]

  porCategoria;

   constructor() { }

   ngOnInit() {
     this.filtro();
    }

  filtro(){
    this.porCategoria = this.productos.filter(res=> res.categoria == this.segmento);
  }  

}
