import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product, ShopService } from '../../pages/shared/shop.services';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Beagle Paw Ceramic Candle',
      price: 12.00,
      oldPrice: 20.00,
      image: '//cadence-workdo.myshopify.com/cdn/shop/files/1_92ff487b-7102-4a5e-baf5-c79241100b89_300x300.png?v=1717583166',
      rating: 5,
      colors: ['#e12eb5'],
      isNew: true,
      discount: 40
    },
    {
      id: 2,
      name: 'Blue Candle',
      price: 21.00,
      image: '//cadence-workdo.myshopify.com/cdn/shop/files/1_36017698-fa16-412f-b71b-c0629dec8f1c_300x300.png?v=1717583300',
      rating: 2,
      colors: ['#d4b311', '#a2bd52', '#963b6d']
    },
    {
      id: 3,
      name: 'Vanilla Soy Candle',
      price: 20.00,
      oldPrice: 25.00,
      image: '//cadence-workdo.myshopify.com/cdn/shop/files/1_4f70d0f5-2275-486b-a7b8-c84f695f66a8_300x300.png?v=1717581218',
      rating: 0,
      colors: ['#1b2f93'],
      isNew: true,
      discount: 20
    },
    {
      id: 4,
      name: 'Soy Off–White Twisted Candle',
      price: 10.00,
      image: '//cadence-workdo.myshopify.com/cdn/shop/files/1_52470543-e201-4efe-98a2-206dca71a57f_300x300.png?v=1717580078',
      rating: 4,
      colors: ['#328684', '#929e38']
    },
    {
      id: 5,
      name: 'Nordic Style Ceramic Candle Holder',
      price: 15.00,
      oldPrice: 20.00,
      image: '//cadence-workdo.myshopify.com/cdn/shop/files/1_d4c6114d-8140-4560-acd5-22f9f462c03f_300x300.png?v=1717582759',
      rating: 3,
      colors: ['#ddd', '#fff', '#963b3b'],
      isNew: true,
      discount: 25
    },
    {
      id: 6,
      name: 'Moon Soy Wax Candle',
      price: 15.00,
      oldPrice: 20.00,
      image: '//cadence-workdo.myshopify.com/cdn/shop/files/1_80bef2ba-ae3e-4957-bf74-a8e00c50a5bb_300x300.png?v=1717580394',
      rating: 4,
      colors: ['#fbdcdc', '#f7e85d'],
      isNew: true,
      discount: 25
    },
    {
      id: 7,
      name: 'Mermaid Candle',
      price: 15.00,
      image: '//cadence-workdo.myshopify.com/cdn/shop/files/1_2848604d-1ff2-4622-97f5-70a312813974_300x300.png?v=1717582110',
      rating: 3,
      colors: ['#fbb7b7'],
      isNew: true
    },
    {
      id: 8,
      name: 'Knot Candle',
      price: 25.00,
      image: '//cadence-workdo.myshopify.com/cdn/shop/files/5_179b70d2-82ba-4b36-ad84-152d4a55a791_300x300.png?v=1717581101',
      rating: 5,
      colors: ['#fff', '#963b3b']
    }
  ];
  router: any;

  constructor(private shopService: ShopService) {}


  addToCart(product: Product) {
    const cartItem = { ...product, quantity: 1 };
    this.shopService.addToCart(cartItem);
    this.router.navigate(['/cart']); // Navigate to cart after adding
  }
  
  isInCart(product: Product): boolean {
    return this.shopService.getCart().some(item => item.id === product.id);
  }

  getStars(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }
}