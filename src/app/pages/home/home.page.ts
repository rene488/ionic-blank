import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView:2.5
  };

  categorias = [
    {
      foto: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      nombreCategoria: 'Pizzas'
    },
    {
      foto: 'https://images.unsplash.com/photo-1612862068929-a9590aa97236?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      nombreCategoria: 'Pastas'
    },
    {
      foto: 'https://images.unsplash.com/photo-1605659123734-6e51146606b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      nombreCategoria: 'Postres'
    },
    {
      foto: 'https://images.unsplash.com/photo-1614891669421-964261109bb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
      nombreCategoria: 'Hamburguesas'
    },
    {
      foto: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      nombreCategoria: 'Sushis'
    }
  ]

  

  constructor(public router: Router) { }

  goToSearchPage() {
    this.router.navigate(['/search-page']);
  }


  goToCategoriesPage() {
    this.router.navigate(['/receta-categoria-page']);
  }

  ngOnInit() {
  }

}
