import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { take } from 'rxjs';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent   {
  categories:any;
  product:Product=new Product();
  id:any;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService) {

      categoryService.getAll().subscribe(c=>this.categories=c);
      
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) 
        this.productService.get(this.id).pipe(take(1)).subscribe((p:any)=>
          {
            this.product=new Product(p);
          }
          );
  }

  save(product:any) { 
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }
}