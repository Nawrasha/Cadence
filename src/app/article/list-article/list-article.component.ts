import { Component, effect, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ShopService } from '../../pages/shared/shop.services';

@Component({
  selector: 'app-list-article',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css',
  standalone: true
})
export class ListArticleComponent  implements OnInit {

  products: any[] = [];
  productsFiltred: any[] = [];
  category!: any;
  filters: any;
  minPrice: any = null;
  maxPrice: any = null;
  categoryLabel: string = '';
  inStockCount: number = 0;
  outOfStockCount: number = 0;
  inStockSelected: boolean = false;
  outOfStockSelected: boolean = false;
  brands: string[] = [];
  selectedBrands: { [brand: string]: boolean } = {};
  colors: string[] = ['Black', 'Blue', 'Brown', 'Orange', 'White'];  // Liste des couleurs disponibles
  selectedColors: { [color: string]: boolean } = {};  // Pour suivre les couleurs sélectionnées
  router: any;
  cartVisible: boolean = false;
  
  constructor(public services: ServicesService, public route: ActivatedRoute,private shopService: ShopService) {
    
    effect(() => {
      this.route.paramMap.subscribe(params => {
        this.category = params.get('category')|| 'all';
        this.getArticlesByCategory();
        this.setCategoryLabel();
      });
    });
  }
  ngOnInit(): void {
    this.colors.forEach(color => this.selectedColors[color] = false);
  }
 addToCart(products: any) {
    const cartItem = { ...products, quantity: 1 ,image: products.images[0]?.url};
    this.shopService.addToCart(cartItem);
    this.router.navigate(['/cart']);
  }
  toggleCartVisibility() {
    this.cartVisible = !this.cartVisible;
  }
  calculateStockCounts() {
    this.inStockCount = this.productsFiltred.filter(product => product.stock > 0).length;
    this.outOfStockCount = this.productsFiltred.filter(product => product.stock === 0).length;
  }
  updateProducts(newProducts: any[]) {
    this.products = newProducts;
    this.productsFiltred = newProducts;
    this.calculateStockCounts();
  }

  setCategoryLabel() {
    fetch('/assets/data/categories.json')
      .then(res => res.json())
      .then((data: any[]) => {
        const found = data.find(cat => cat.id.toString() === this.category);
        this.categoryLabel = found ? found.label : 'Account';
      });
  }
  
  
  

  getArticlesByCategory() {
    if (this.category == 'all') {
      this.services.getProducts().then((data: any[]) => {
        this.products = data; // Tous les produits
        this.productsFiltred = [...this.products]; // Copie de tous les produits pour le filtrage
  
        this.brands = [...new Set(this.products.map(p => p.brand))];
    
        this.selectedBrands = {};
        this.brands.forEach(brand => this.selectedBrands[brand] = false);
    
        this.updateProducts(this.productsFiltred);
      });
    }else {
      this.services.getProductsByCateg(this.category).then((data: any[]) => {
        this.products = data.filter((element: any) => element.category == this.category);
        this.productsFiltred = [...this.products];
    
        this.brands = [...new Set(this.products.map(p => p.brand))];
    
        this.selectedBrands = {};
        this.brands.forEach(brand => this.selectedBrands[brand] = false);
    
        this.updateProducts(this.productsFiltred);
      });
    }
  }
  

  filter() {
    // Vérification des bornes de prix
    if ((this.minPrice !== null && this.maxPrice !== null) && this.maxPrice < this.minPrice) {
      alert('Sala7 les prix');
      return;
    }
  
    const min = this.minPrice !== null ? this.minPrice : 0;
    const max = this.maxPrice !== null ? this.maxPrice : Infinity;
  
    // Récupérer les marques et couleurs sélectionnées
    const activeBrands = Object.entries(this.selectedBrands)
      .filter(([_, isChecked]) => isChecked)
      .map(([brand]) => brand);

    const activeColors = Object.entries(this.selectedColors)
      .filter(([_, isChecked]) => isChecked)
      .map(([color]) => color);

    this.productsFiltred = this.products.filter((product: any) => {
      const originalPrice = Number(product.price);
      const remise = Number(product.remise || 0);
      const finalPrice = originalPrice - (originalPrice * remise / 100);
  
      const priceMatch = finalPrice >= min && finalPrice <= max;
  
      // Stock filtering
      const stockMatch =
        (this.inStockSelected && product.stock > 0) ||
        (this.outOfStockSelected && product.stock === 0) ||
        (!this.inStockSelected && !this.outOfStockSelected); // si aucun filtre sélectionné, on garde tout
  
      // Brand filtering
      const brandMatch =
        activeBrands.length === 0 || activeBrands.includes(product.brand);
  
      // Color filtering
      const colorMatch =
        activeColors.length === 0 || activeColors.includes(product.color);  // assuming product.color contains the color
  
      return priceMatch && stockMatch && brandMatch && colorMatch;
    });
  
    this.calculateStockCounts();
  }

    
  resetColors() {
    // Réinitialise toutes les couleurs sélectionnées
    for (let color in this.selectedColors) {
      this.selectedColors[color] = false;
    }
    this.filter();  // Applique le filtre après réinitialisation
  }

  get selectedColorsCount(): number {
    return Object.values(this.selectedColors).filter(v => v).length;
  }


  
  
  resetAvailability() {
    this.inStockSelected = false;
    this.outOfStockSelected = false;
    this.filter(); // Réapplique les filtres avec aucune disponibilité sélectionnée
  }
  resetPrice() {
    this.minPrice = null;
    this.maxPrice = null;
    this.filter(); // Applique de nouveau le filtre après réinitialisation
  }
  resetBrands() {
    for (let brand in this.selectedBrands) {
      this.selectedBrands[brand] = false;
    }
    this.filter();
  }

  get selectedBrandsCount(): number {
    return Object.values(this.selectedBrands).filter(v => v).length;
  }
  getBrandProductCount(brand: string): number {
    return this.products.filter(p => p.brand === brand).length;
  }
  
  
  get selectedAvailabilityCount(): number {
    let count = 0;
    if (this.inStockSelected) count++;
    if (this.outOfStockSelected) count++;
    return count;
  }
  


showQuickView: boolean = false;
selectedProduct: any;
toggleQuickView(product: any) {
  this.selectedProduct = product;
  this.showQuickView = !this.showQuickView;
}

currentImageIndex: number = 0;

nextImage() {
  this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedProduct.images.length;
}

prevImage() {
  this.currentImageIndex =
    (this.currentImageIndex - 1 + this.selectedProduct.images.length) % this.selectedProduct.images.length;
}


quantity: number = 1;

increaseQuantity() {
  this.quantity++;
}

decreaseQuantity() {
  if (this.quantity > 1) {
    this.quantity--;
  }
}

}



