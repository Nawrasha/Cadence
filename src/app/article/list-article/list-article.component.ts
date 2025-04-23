import { Component, effect, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-article',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css',
  standalone: true
})
export class ListArticleComponent  implements OnInit {

  products: any[] = [];
  productsFiltred: any[] = [];
  category!: any;
  filters: any;
  minPrice: any = 0;
  maxPrice: any = 0;
  constructor(public services: ServicesService, public route: ActivatedRoute) {
    effect(() => {
      this.route.paramMap.subscribe(params => {
        this.category = params.get('category');
        this.getArticlesByCategory();
      });
    });
  }
  ngOnInit(): void {
    
  }
  getArticlesByCategory() {
    this.services.getProducts().then((data:any[]) => {
      this.products = data.filter((element:any) => element.category == this.category);
      this.productsFiltred = data.filter((element:any) => element.category == this.category);
    })
  }
  filter() {
    if (this.maxPrice < this.minPrice) {
      alert('sala7 les prix')
      return
    }
    this.productsFiltred = this.products.filter((product:any) => {
      return product.price >= this.minPrice && 
      product.price <= this.maxPrice /* && 
     product.stock > */
    })
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



