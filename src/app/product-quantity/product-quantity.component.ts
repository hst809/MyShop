import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product:any;
  @Input('shopping-cart') shoppingCart:any;

  constructor(private ShopCartService:ShoppingCartService ){
    
  }
  
  addToCart(){
    this.ShopCartService.addToCart(this.product);
  }

  removeFromCart(){
    this.ShopCartService.removeFromCart(this.product);
  }

}
