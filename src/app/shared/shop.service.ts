import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  quantity?: number;
  rating: number;
  colors: string[];
  isNew?: boolean;
  discount?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  cart: Product[] = [];
  wishlist: Product[] = [];

  addToCart(product: Product) {
    const found = this.cart.find(item => item.id === product.id);
    if (found) {
      found.quantity! += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  addToWishlist(product: Product) {
    if (!this.wishlist.find(item => item.id === product.id)) {
      this.wishlist.push({ ...product });
    }
  }

  getCart() {
    return this.cart;
  }

  getWishlist() {
    return this.wishlist;
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.id !== productId);
  }

  removeFromWishlist(productId: number) {
    this.wishlist = this.wishlist.filter(item => item.id !== productId);
  }
} 