export class Product {
    key: string='';
    title: string='';
    price: number=0;
    category: string='';
    imageUrl: string='';
  
    constructor(input?:any) {
      if(!input) return;
      this.key = input.key;
      this.title = input.payload.val().title;
      this.price = input.payload.val().price;
      this.category = input.payload.val().category;
      this.imageUrl = input.payload.val().imageUrl;
    }


  }