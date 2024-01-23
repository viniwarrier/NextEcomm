
import React from 'react' 
import ProductsPage from './products/page';
import Banner from './components/Banner/Banner';
export default function Page() {
 return(
  <> 
  <Banner/>
  <div>
    <ProductsPage/>
  </div>
 </>);
}
