import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Product } from './models/product';
import { Observable, map, take } from 'rxjs';
import { ShoppingCart } from './models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) {

   }

  async getCart():Promise<Observable<ShoppingCart>>{
    let cartId=await this.getOrCreateCartId();
    return  this.db.object('/shopping-cart/'+cartId).snapshotChanges()
            .pipe(map((x:any)=> {                       
              return new ShoppingCart(x.payload.val().items)}))
  }

  private create(){
    return this.db.list('shopping-cart').push({
      dateCreated:new Date().getTime()
    });
  }

  async clearCart(){
    let cartId=await this.getOrCreateCartId();
    this.db.object('/shopping-cart/'+cartId+'/items').remove()
  }

   private async getOrCreateCartId():Promise<string>{
     
     let cartId=localStorage.getItem('cartId');
     if(cartId) return cartId;
      let result = await this.create();
      localStorage.setItem('cartId',result.key||'');
      return result.key || '';
      //**********hamin code balaee ye bedoone await */
      // this.create().then(result=>{
      //   localStorage.setItem('cartId',result.key||'')
      //   return this.getCart(result.key||'')
      //************************ */
    }

    getItem(CartId:string,productId:string){
      return this.db.object('/shopping-cart/'+CartId+'/items/'+productId);
    }

    async addToCart(product:any){
      this.updateQuantity(product,1)  
    }

    async removeFromCart(product:any){
      this.updateQuantity(product,-1)  
    }

  async updateQuantity(product:Product,changed:number){
    
    let cartId=await this.getOrCreateCartId();
    let items$=this.getItem(cartId,product.key)
    items$.valueChanges().pipe(take(1)).subscribe( (x:any)=> {
      if(x?.quantity+changed===0 ) items$.remove()
      else
      //   if(x) items$.update({quantity:x.quantity+1})
      //   else      
      //     items$.update({
      //       product:product,quantity:1})}
      items$.update({product:product,quantity:(x?.quantity||0)+changed})
    })
  }
  
}
