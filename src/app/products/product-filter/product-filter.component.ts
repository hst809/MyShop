import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  @Input('category') category:any;
  categories$:Observable<any>;
  constructor(categoryService:CategoryService){
    this.categories$=categoryService.getAll();

  }
}
