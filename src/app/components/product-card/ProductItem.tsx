'use client'
import styles from "../styles/ProductItem.module.css";
import {stripHtml} from "string-strip-html";
import Product from "@/app/interfaces/productinter";
import Link from "next/link";
interface ProductItemProps {
  product: Product;  
}
const ProductItem:React.FC<ProductItemProps>=({product})=>{ 
    const {result} = stripHtml(product.description);
    return (   
        <div className={styles.cardsize}>            
                    <div className="card h-100">     
                      <div className="card-body card-textformat">
                        <div  className="imagesize ms-2 me-2 ps-2 pe-2 mt-2 pt-2">                     
                          <img 
                           src={product.image.url}                           
                            alt={product.name}
                            loading="lazy"
                            width={230}
                            height={170} 
                          />
                        </div>
                        <div className="mt-2 pt-3" >                       
                        <Link href="/products/[productId]" as={`/products/${product.id}`} >                       
                        {product.name}</Link>                        
                        </div>                        
                        <div >{result}</div>
                        <div className={styles.price}>{product.price.formatted_with_symbol}</div>                                                                                   
                      </div>                           
                    </div>                  
                  </div>          
     );
}
export default ProductItem;