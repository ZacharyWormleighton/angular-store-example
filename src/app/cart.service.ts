import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShippingResponse } from './types/responses';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}

  getShippingPrices() {
    return this.http.get<ShippingResponse[]>('/assets/shipping.json');
  }
  
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}