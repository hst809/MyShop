import { ShoppingCart } from "./shopping-cart";

export class Order{

    datePlaced:number;
    private items:any[];
    constructor(
        public userId:string,
        public shipping:any,
        cart :any
    )
    {
        this.datePlaced=new Date().getTime();
        this.items=cart.items.map((i:any) => {
            return {
              product:{
                title:i.product.title,
                imageUrl:i.product.imageUrl,
                price:i.product.price,
              },
              quantity:i.quantity,
              totalPrice:i.totalPrice
    
            }
          })
    }
}