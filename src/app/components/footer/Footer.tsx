
import React from 'react';
import styles from '../../components/styles/footer.module.css'; 
import Link from 'next/link';
export default function Footer(){
  return (
  
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
       
        <div className={styles.footerColumn}>
          <div className={styles.footgridfirstrow}>About</div>
          <div className={styles.footgriditem}><Link href="#">Contact Us</Link></div>
          <div className={styles.footgriditem}><Link href="#">About Us</Link></div>
          <div className={styles.footgriditem}><Link href="#">Careers</Link></div>
          <div className={styles.footgriditem}><Link href="#">Press</Link></div>          
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.footgridfirstrow}>Help</div>
          <div className={styles.footgriditem}><Link href="#">Payments</Link></div>
          <div className={styles.footgriditem}><Link href="#">Shipping</Link></div>
          <div className={styles.footgriditem}><Link href="#">Cancellation & Returns</Link></div>
          <div className={styles.footgriditem}><Link href="#">FAQ</Link></div>          
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.footgridfirstrow}>Consumer Policy</div>
          <div className={styles.footgriditem}><Link href="#">Terms of use</Link></div>
          <div className={styles.footgriditem}><Link href="#">Security</Link></div>
          <div className={styles.footgriditem}><Link href="#">Privacy</Link></div>
          <div className={styles.footgriditem}><Link href="#">Sitemap</Link></div>          
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.footgridfirstrow}>Social</div>
          <div className={styles.footgriditem}><Link href="#">Facebook</Link></div>
          <div className={styles.footgriditem}><Link href="#">Twitter</Link></div>
          <div className={styles.footgriditem}><Link href="#">YouTube</Link></div>       
        </div>
        <div className={styles.footerColumn}>
            <div className={styles.footgridfirstrow}>Mail Us</div>
            <div className={styles.footgriditem}>  Onlinecart Private Limited
                  <br/>Oasis Buidling<br/>Tech Village
                  <br/>Ring Road<br/>Kochi<br/>Kerala
            </div> 
        </div>
        <div className={styles.footerColumn}>
            <div className={styles.footgridfirstrow}>Registered Office Address</div>
            <div className={styles.footgriditem}>  Onlinecart Private Limited
                  <br/>Oasis Buidling<br/>Tech Village
                  <br/>Ring Road<br/>Kochi<br/>Kerala
                  <br/> Telephone: 0484 000000
            </div> 
        </div>
        </div>                 
       
        <div className={styles.footerRow}>
            <div className={styles.footerlastmenu}>
                <div className={styles.footimg}><img src="/images/seller.svg"  alt='seller'/>&nbsp;&emsp;Become a Seller</div>
                <div className={styles.footimg}><img src="/images/star.svg" alt='star'/>&nbsp;&emsp;Advertise</div>
                <div className={styles.footimg}><img src="/images/gift.svg"  alt='gift'/>&nbsp;&emsp;Gift Cards</div>
                <div className={styles.footimg}><img src="/images/help.svg"  alt='help'/>&nbsp;&emsp;Help Center</div>
                <div className={styles.footimg}>© 2020 - 2023 OnlineCart.com</div>             
            </div>   
        </div>        
       </footer>
           
  );
}

