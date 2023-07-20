import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ShoppingCartService } from './shopping-cart.service';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db:AngularFireDatabase,private shoppingCartServ:ShoppingCartService) { }

  async placeOrder(order:any){
    let result=await this.db.list('/orders').push(order);
    this.shoppingCartServ.clearCart();
    return result
  }

  getAll(){
    return this.db.list('/orders').snapshotChanges();
  }
  
  getOrder(id:string){
    return this.db.object('/orders/'+id).valueChanges();
  }

  getUserOrder(userId:string){
    return this.db.list('/orders',(ref)=>
      ref.orderByChild('userId').equalTo(userId)
    ).valueChanges();

  }
}
