import { Component } from '@angular/core'; // <-- à rajouter
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopService } from '../shared/shop.services';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  isOpen = true;

  constructor(public shop: ShopService) {}

  open() {
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpen = false;
    document.body.style.overflow = '';
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  incrementQuantity(item: any) {  // <-- ici item est de type CartItem
    item.quantity++;
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(productId: number) {
    this.shop.removeFromCart(productId);
  }

  get cartItems() {
    return this.shop.getCart();  // 👈 récupère dynamiquement
  }

  get totalItems(): number {
    return this.cartItems.reduce((total, item) => total + (item.quantity ?? 0), 0);
  }
  
  get subtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * (item.quantity ?? 0)), 0);
  }  
}