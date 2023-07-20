import { Component,  OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { appUser } from '../models/app-user';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'bs-nav',
  templateUrl: './bs-nav.component.html',
  styleUrls: ['./bs-nav.component.css']
})
export class BsNavComponent implements OnInit{

  public myUser:appUser|any;
  carts$:Observable<ShoppingCart>=new Observable;

  constructor(private auth:AuthService,private shoppingCartServ:ShoppingCartService){
  }
  
  logout(){
    this.auth.logout();
  }
  
  async ngOnInit() {
    this.auth.appUser$.subscribe(item=>this.myUser=item);
    
    this.carts$=await this.shoppingCartServ.getCart();
  }
}
