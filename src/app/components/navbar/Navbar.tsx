'use client'
import styles from '../../components/styles/nav.module.css';
import Link  from 'next/link';
import React from 'react';
import { useContext } from 'react';
import CartContext from '@/app/context/FilterContext';
export default function Navbar() { 
  const {setCartId} = useContext(CartContext);

    return (
      <>
      <nav className="navbar navbar-expand-lg mt-0 pt-0 ms-0 me-0 ps-0 pe-0">
        <div className="container-fluid mt-0 pt-0 ms-0 me-0 ps-0 pe-0">
        <div className={styles.navbar}>         
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"            >
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">  
                <div className={styles.navmenu}>
                        <Link href="/" className={styles.navmenu} aria-current="page"> Home </Link>                 
                        <Link href={"/products"} className={styles.navmenu}>Products</Link>
                        <Link href={"/about-us"} className={styles.navmenu}>AboutUs </Link>                          
                        <Link href={"/contact-us"} className={styles.navmenu}>ContactUs </Link>                             
                        <Link href={"/cart/[CartId]"} as={`/cart/${setCartId}`}><img src="/images/cart.jpg" alt='Cart' width={30} height={25} /></Link>
                </div>
            </div>
          </div>
        </div>
        </div>
      </nav>
      </>
    );
}
