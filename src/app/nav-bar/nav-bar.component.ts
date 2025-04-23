import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-nav-bar',
  imports: [ RouterModule,CommonModule,],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isHomeVisible: boolean = false;
  categories: any[] = [];
  constructor(public services: ServicesService) {
    this.getCategories()
  }

  async getCategories() {
    await this.services.getCategories().then((data:any) => {
      this.categories = data;
    })
  }
// Display the home section
showHome() {
  this.isHomeVisible = true;
}

// Hide the home section
hideHome() {
  this.isHomeVisible = false;
}

// Keep the home section visible when mouse enters
keepHomeOpen(event: MouseEvent) {
  event.stopPropagation();
  this.isHomeVisible = true;
}

// Close the home section when mouse leaves
closeHome(event: MouseEvent) {
  event.stopPropagation();
  this.isHomeVisible = false;
}

  
  
  
  isShopAllVisible: boolean = false;
  
  // Affiche la div shopall
  showShopAll() {
    this.isShopAllVisible = true;
  }

  // Cache la div shopall
  hideShopAll() {
    this.isShopAllVisible = false;
  }

  // Garde la div shopall ouverte lorsque la souris entre dans l'élément
  keepShopAllOpen(event: MouseEvent) {
    event.stopPropagation();  // Empêche la propagation de l'événement
    this.isShopAllVisible = true;
  }

  // Ferme la div shopall lorsque la souris quitte l'élément
  closeShopAll(event: MouseEvent) {
    event.stopPropagation();  // Empêche la propagation de l'événement
    this.isShopAllVisible = false;
  }


  isProductsVisible: boolean = false;
isPagesVisible: boolean = false;
isBlogsVisible: boolean = false;

showProducts() { this.isProductsVisible = true; }
hideProducts() { this.isProductsVisible = false; }
keepProductsOpen(event: MouseEvent) { event.stopPropagation(); this.isProductsVisible = true; }
closeProducts(event: MouseEvent) { event.stopPropagation(); this.isProductsVisible = false; }

showPages() { this.isPagesVisible = true; }
hidePages() { this.isPagesVisible = false; }
keepPagesOpen(event: MouseEvent) { event.stopPropagation(); this.isPagesVisible = true; }
closePages(event: MouseEvent) { event.stopPropagation(); this.isPagesVisible = false; }

showBlogs() { this.isBlogsVisible = true; }
hideBlogs() { this.isBlogsVisible = false; }
keepBlogsOpen(event: MouseEvent) { event.stopPropagation(); this.isBlogsVisible = true; }
closeBlogs(event: MouseEvent) { event.stopPropagation(); this.isBlogsVisible = false; }

}
