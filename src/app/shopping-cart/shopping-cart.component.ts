import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  carts$:Observable<ShoppingCart>= new Observable;

  constructor(private shoppingCartService:ShoppingCartService){

  }

  clearCart(){
    this.shoppingCartService.clearCart();
  }

  async ngOnInit() {
    this.carts$= await this.shoppingCartService.getCart();
  }
}
