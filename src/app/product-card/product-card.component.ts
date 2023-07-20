import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input('product') product:any;
  @Input('show-action') showAction:any;
  @Input('shopping-cart') shoppingCart:any;

  constructor(private ShopCartService:ShoppingCartService ){
    
  }
  
  addToCart(){
    this.ShopCartService.addToCart(this.product);
  }

}
