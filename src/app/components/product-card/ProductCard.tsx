'use client'
import react, {useEffect,useState} from 'react'
import { ProductService } from '@/app/services/product-services';
import Product from '@/app/interfaces/productinter';
import ProductItem from './ProductItem';
import styles from '../styles/ProductCard.module.css';
import { useFilter } from '@/app/context/FilterContext';

const ProductCard:React.FC=()=>{
  const { filterProducts, searchTerm } = useFilter();
  const [products, setProducts] = useState<Product[] | undefined>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); 
  useEffect(() => {
    const fetchData = async () => {
      try {
            const response = await ProductService.getProducts();
            const data: { data: Product[] } = await response.json(); 
            setProducts(data.data);     
            const products = filterProducts(data.data);
            setFilteredProducts(products);            
           }
       catch (error) {
            console.error('Error fetching data:', error);
      }}; 
   fetchData(); 
  },);
   
  return (
    <div className={styles.proddisplay}>   
      {
      products && products.length > 0 && searchTerm === '' ? (
        products.map((product: Product) => (
          <div className='dflex' key={product.id}>           
            <ProductItem product={product}/>           
          </div>
        ))
      ) 
      : ((
        
        filteredProducts.length > 0 ? (
          filteredProducts.map((product:Product) => (
            <div className="dflex" key={product.id}>
              <ProductItem product={product} />
            </div>
          
        ))) : (
        <p> Items!!!!....</p>
      )))}
    </div>
  );
};
export default ProductCard;
   
      
  
    
  