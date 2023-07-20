import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy{
  @Input('cart') cart: any;
  shipping: any = {};
  subscription:Subscription=Subscription.EMPTY;
  userId='';

  constructor(
    private router:Router,
    private authService:AuthService,
    private orderService:OrderService){}


  ngOnInit() {
    this.subscription= this.authService.user$.subscribe(i=>this.userId=i.uid)

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async placeOrder(){
    let order=new Order(this.userId,this.shipping,this.cart);
    let result=await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success',result.key])
  }
}
