import { Product } from '../models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements  OnDestroy {
  products: any[]=[];
  subscription: Subscription;
  items: Product[] = [];
  filteredProducts:any[]=[];

  constructor(private productService: ProductService) { 
    
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.filteredProducts=this.products = products;
        
      });
  }


  filter(query: string) { 
    this.filteredProducts = (query) ?
      this.products.filter(p =>p.payload.val().title.toLowerCase().includes(query.toLowerCase())) :
      this.products;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}