'use client'
import styles from "../../components/styles/ProductItem.module.css";
import {stripHtml} from "string-strip-html";
import { useContext, useEffect, useState } from 'react';
import Link from "next/link";
import { ProductService } from "@/app/services/product-services";
import CartContext, { useCart } from "@/app/context/FilterContext";
import Product from "@/app/interfaces/productinter";
export default function ProductDetails(props:any) {
    const productId=props.params.ProductId;
    const {addCart}=useContext(CartContext);
    const { addToCart } = useCart();
    const{setCartId}=useContext(CartContext);
  const handleAddToCart = (pid:string,pname:string,pquantity:number,pprice:number) => {   
    const products = {
      id: pid,
      name:pname,
      quantity: pquantity,
      price:pprice
      
    };  
    addToCart(pid,pname,pquantity,pprice); 

  }
  const [product, setProduct] =useState<Product | undefined>();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await ProductService.getProductById(productId);
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]); 
  const strippedProduct = product && stripHtml(props.params.description ?? '');
  const result = strippedProduct ? strippedProduct.result : null;
    return (  
        <div className="container mt-5 pb-5 ">
            <div className={styles.cardsizedetail}>  
             {           
                product ?(         
                    <div className="card h-100">     
                      <div className="card-body card-textformat">
                        <div  className="imagesize ms-2 me-2 ps-2 pe-2 mt-2 pt-2">                     
                          <img 
                           src={product?.image.url}                           
                            alt={product?.name}
                            loading="lazy"
                            width={230}
                            height={170} 
                          />
                        </div>
                        <div className="mt-2 pt-3">                       
                           <Link href={'/products/'+product.id}>{product.name}</Link>                   
                        </div>                        
                        <div >{result}</div> 
                       <div className={styles.price}>{product.price.formatted_with_symbol}</div> 
                       <button  className={styles.addCart} type="button" onClick={()=>product && handleAddToCart(product.id,product.name,1,product.price.raw)}>AddToCart   </button> 
                       <Link href="/cart/[CartId]" as={`/cart/${setCartId}`}>
                        <br/><br/>                    
                            <button className={styles.viewCart}type="button">View Cart</button>                        
                        </Link>                         
                                                                                                 
                      </div>
                    </div>):(<p>Loading..</p>)}
                  </div> 
                  </div>            
     );
}
