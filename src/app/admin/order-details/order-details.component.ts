import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  id:any;
  orderDetails:any;
  cart:any={};

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private orderService:OrderService
  ){
    
    this.id = this.route.snapshot.paramMap.get('id');
    //this.orderDetails = this.orderService.getOrder(this.id)
    this.orderService.getOrder(this.id).pipe(take(1)).subscribe((i:any)=>{   
      this.cart.items=i.items
      this.orderDetails=i})
  }
}
