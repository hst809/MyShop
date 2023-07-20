import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})

export class CheckOutComponent implements OnInit {
  cart$: Observable<any> = new Observable();

  constructor(
    private shoppingCart: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCart.getCart();

  }
}
