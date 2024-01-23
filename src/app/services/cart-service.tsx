// CartService.tsx
import { ServiceBase } from "./service-base";
import Product from "../interfaces/productinter";
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }
 
  export class CartService extends ServiceBase{
    static cart: CartItem[] = [];    
    static fetchCart=async(): Promise<CartItem[]> => {     
        try {
        const response=await fetch((ServiceBase.getURL("/carts")),{
          method:'GET',
            headers: {
              'X-Authorization': ServiceBase.PUBLIC_KEY,
              'Content-Type': 'application/json',
            },
        });   if (!response.ok) {
          throw new Error(`Error fetching cart: ${response.statusText}`);
        }
  
        const cartData = await response.json();
        return cartData.line_items;
        } catch (error) {
          console.error('Error fetching products:', error);
          throw error;
        }    
     
    }
  
    static addToCart=async(cartId:string,productId: string,name:string,quantity: number,price:number): Promise<CartItem[]>=> {
     
      const newItem: CartItem = {
        id: productId,
        name: name,
        price: price, 
        quantity,
      };
      this.cart.push(newItem);
      try {
        const response=await fetch((ServiceBase.getURL("/carts/${cartId}")),{
          method:'POST',
            headers: {
              'X-Authorization': ServiceBase.PUBLIC_KEY,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              productId: productId,
              name:name,
              quantity: quantity,             
              price:price
            }),
        });                  
        console.log("post method..added item",response.statusText);
      } catch (error) {
          console.error('Error fetching products:', error);
          throw error;
        }    
      return Promise.resolve(this.cart);
    }
    
    
  };
  

  