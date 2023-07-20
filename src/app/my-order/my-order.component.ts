import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit, OnDestroy {
  orders$: any;
  userId = '';
  subscription: Subscription = Subscription.EMPTY;

  constructor(private orderService: OrderService, private authService: AuthService) {
   // this.orders = this.orderService.getUserOrder(this.userId)
    this.orders$ = authService.user$.pipe(switchMap(u => orderService.getUserOrder(u.uid)));

  }

  ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe(i => this.userId = i.uid)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
