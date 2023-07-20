import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  create(product:any){
    return this.db.list('/products').push(product);
  }

  getAll():Observable<any>{
    return this.db.list('/products').snapshotChanges();
  }

  get(productId:string){
    return this.db.object('/products/'+productId).snapshotChanges();
  }

  delete(productId:string){
    return this.db.object('/products/'+productId).remove();
  }

  update(productId:string,product:any){
    return this.db.object('/products/'+productId).update(product);
  }

}
