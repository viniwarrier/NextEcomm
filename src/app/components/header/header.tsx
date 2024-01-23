"use client";
import React from "react";
import react, { useEffect, useState } from "react";
import styles from "../styles/header.module.css";
import { useFilter } from "../../context/FilterContext";
import Product from "@/app/interfaces/productinter";
import { ProductService } from "@/app/services/product-services";
export default function Header() {
  const [allProducts, setProducts] = useState<Product[]>();
  const { searchTerm, setSearchTerm, filterProducts } = useFilter();
  const handleSearch = async () => {
    try {
      const response = await ProductService.getProducts();
      const data: { data: Product[] } = await response.json();
      setProducts(data.data);
      const filteredProducts = filterProducts(data.data);
      console.log(filteredProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
        <span className={styles.logotext}>ShopMe</span>
      </div>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="button"
          onClick={handleSearch}
          className={styles.search_button}
        >
          Search
        </button>
      </div>
    </header>
  );
}
