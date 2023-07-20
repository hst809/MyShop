import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable,  switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from '../models/product';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];
  filteredProducts:Product[]=[];
  category:any;
  cart$:Observable<ShoppingCart>=new Observable;

  constructor (
    private productService:ProductService,
    private route:ActivatedRoute,
    private shoppingCartServ:ShoppingCartService) 
    {
   
    }

  async ngOnInit(){
    
    this.cart$= await this.shoppingCartServ.getCart();
    this.productService.getAll()
    .pipe(switchMap(p=>{
      for(let item in p)
        this.products.push(new Product(p[item]))
      
      return this.route.queryParamMap
    }))
      .subscribe(param=>{
        this.category=param.get('category')
  
        this.filteredProducts=(this.category) ? 
        this.products.filter(p=>p.category===this.category) :
        this.products;
        
      })
  }

}
