import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopService } from '../shared/shop.service';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  isOpen = true;
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Rose Candle Peony',
      price: 20.00,
      quantity: 1,
      image: '//cadence-workdo.myshopify.com/cdn/shop/files/1_92ff487b-7102-4a5e-baf5-c79241100b89_80x120.png?v=1717583166'
    }
  ];

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
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  incrementQuantity(item: CartItem) {
    item.quantity++;
  }

  decrementQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(productId: number) {
    this.shop.removeFromCart(productId);
  }

  get totalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  get subtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
