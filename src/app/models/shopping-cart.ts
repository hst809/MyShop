import { Product } from "./product";
import { ShoppingCartItem } from "./shopping-cart-items";

export class ShoppingCart{

    items:ShoppingCartItem[]=[]

    constructor(private itemsMap:{[producId:string]:ShoppingCartItem}){        
        for(let producId in itemsMap){
            let item=itemsMap[producId]
            this.items.push(new ShoppingCartItem(item.product,item.quantity))
        }
    }
    
    // get productIds():any{
    //     return Object.keys(this.items)
    // }
    get totalPrice(){
        let sum=0;
        for(let i in this.items)
            sum+=this.items[i].totalPrice;
        return sum;
    }

    get totalItemsCount(){
        let count=0
        for(let productId in this.itemsMap)
            count+=(this.itemsMap[productId].quantity);           
        return count;
    }

    getQuantity(product:Product){
        return this.itemsMap?.[product.key]?.quantity ?? 0;

        // return this.itemsMap[product.key] ? 
        //   this.itemsMap[product.key].quantity : 0
      }
}