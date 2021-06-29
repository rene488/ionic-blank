import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {


 pages = [
    { title: 'Categorias', url: '/app/categoria-page', icon: 'home-outline' }, 
    { title: 'Cerrar Sesión', url: 'logout', icon: 'exit-outline' },  
  ]

  selectedPath = '';

  constructor(private router: Router) {

     this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
   }

  ngOnInit() {
  }

  logout(url){
    if(url == 'logout'){
 this.router.navigate(['login']);
    }
   
  }
}