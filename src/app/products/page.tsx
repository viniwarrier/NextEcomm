import React from "react";
import ProductCard from "../components/product-card/ProductCard";
function ProductsPage(){  
  return (
    <div>    
      <div className="container text-center mt-1 pt-3">
           <div className="row col-12"><img src="/images/offerbanner.png" alt="offer1"/></div> 
      </div>
      {<ProductCard/>}    
    </div>
  );
};
export default ProductsPage;

