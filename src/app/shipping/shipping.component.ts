import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { ShippingResponse } from '../types/responses';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<ShippingResponse[]>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
