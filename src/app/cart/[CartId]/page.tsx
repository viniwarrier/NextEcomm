// CartPage.tsx
"use client";
import React, { useContext, useState, useEffect } from "react";
import CartContext, { useCart } from "@/app/context/FilterContext";
import { ServiceBase } from "@/app/services/service-base";
import { useRouter } from "next/navigation";
import styles from '../../components/styles/Cart.module.css';
import { Container } from "react-bootstrap";
interface Image {
  id: string;
  url: string;
  description: string | null;
  is_image: boolean;
  filename: string;
  file_size: number;
  file_extension: string;
  image_dimensions: {
    width: number;
    height: number;
  };
  meta: any[];
  created_at: number;
  updated_at: number;
}

interface CartItem {
  image: Image;
  line_item_id: string;
  id: string;
  name: string;
  product_id: string;
  quantity: number;
  price: {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
  subtotal: {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
}

export default function CartPage() {
  const { setCartId, addToCart, removeFromCart } = useContext(CartContext);
  const { addCart, fetchCart } = useCart();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();
const handleCheckoutClick = () => { 
  router.push('/');
}; 
  const fetchCommerceCart = async () => {
    try {
      const response = await fetch(ServiceBase.getURL(`/carts/${setCartId}`), {
        method: "GET",
        headers: {
          "X-Authorization": ServiceBase.PUBLIC_KEY,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error fetching cart: ${response.statusText}`);
      }
      const cartData = await response.json();
      setCart(cartData.line_items);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };
  useEffect(() => {
    fetchCommerceCart();
  }, [setCartId, fetchCart]);
  useEffect(() => {
       const newTotal = cart.reduce(
      (accumulator, item:CartItem) => accumulator + (item.quantity * item.price.raw),
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const handleRemoveFromCart = async (ItemId: string) => {
    await removeFromCart(ItemId);
    fetchCommerceCart();
  };
  const handleAddCart = async (
    itemId: string,
    itemName: string,
    one: number,
    itemPrice: number
  ) => {
    await addToCart(itemId, itemName, one, itemPrice);
    fetchCommerceCart();
  };
  return (
    <div className={styles.container}>
      <h4>Your Cart</h4>
      {(cart ?? []).length === 0 ? (
        <p>Your cart is empty. Let's start shopping!!</p>
      ) : (
        <ul className={styles.no_bullets}>
          {cart.map((item: CartItem) => (
            <li key={item.id}>
              <div>
                <div><br/>
                  <img
                    src={item.image.url}
                    alt={item.name}
                    style={{ width: "150px", height: "140px" }}
                  />
                </div>
                <div className={styles.productStyle}>
                  <p >
                    Product: {item.name}
                    <br /> Quantity: {item.quantity}
                    <br />
                    Price per Item: {item.price.formatted_with_symbol} <br />
                    SubTotal: ₹ {(item.quantity * item.price.raw).toFixed(2)}
                
                  </p>{" "}
                 
                  <button className={styles.addCart}
                    type="button"                  
                    onClick={() =>
                      handleAddCart(
                        item.product_id,
                        item.name,
                        1,
                        item.price.raw
                      )
                    }
                  >
                    Add
                  </button>
                  <button className={styles.removeCart}
                    type="button"                   
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button><br/>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
     {cart.length > 0 && <p>Total Amount: ₹ {total.toFixed(2)}</p>}
      <button className={styles.checkOut} type="button" onClick={handleCheckoutClick}>
      CheckOut
    </button>            
    </div>
  );
}
