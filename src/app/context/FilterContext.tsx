"use client";
import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  FC,
  ReactNode,
} from "react";
import Product from "../interfaces/productinter";
import { CartService } from "@/app/services/cart-service";
import { ServiceBase } from "../services/service-base";

interface FilterContextProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  filterProducts: (products: Product[]) => Product[];
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);
interface FilterProviderProps {
  children: ReactNode;
}
const FilterProvider: FC<FilterProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filterProducts = (products: Product[]): Product[] => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  return (
    <FilterContext.Provider
      value={{ searchTerm, setSearchTerm, filterProducts }}
    >
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
export { FilterProvider, useFilter };

// Cart Context 
interface CommerceCart {
  id: string;
  line_items: CartItem[];
}
interface CartItem {
  item: string;
  line_item_id: string;
  id: string;
  name: string;
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

interface CartContextProps {
  setCartId: string | undefined;
  addCart: CartItem[];
  addToCart: (
    productId: string,
    name: string,
    quantity: number,
    price: number
  ) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  fetchCart: () => Promise<void>;
}
interface CartProviderProps {
  children: ReactNode;
}
const CartContext = createContext<CartContextProps>({
  setCartId: "",
  addCart: [],
  addToCart: () => Promise.resolve(),
  removeFromCart: () => Promise.resolve(),
  fetchCart: () => Promise.resolve(),
});
export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem | undefined>(undefined);
  const [addCart, setaddCart] = useState([]);
  const [setCartId, setId] = useState<string | undefined>(undefined);
  const [createCartCount, setCreateCartCount] = useState(0);
  useEffect(() => {
    const createCart = async () => {
      try {
        const response = await fetch(ServiceBase.getURL("/carts"), {
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
        if (!cart) {
          setCart(cartData);
          setCreateCartCount(1);
          const id = cartData.id;
          setId(id);
          console.log("cart created", id);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    };

    if (createCartCount === 0) {
      createCart();
      console.log("count", createCartCount);
    }
  }, [createCartCount, cart]);

  const fetchCart = async () => {
    try {
      const response = await fetch(ServiceBase.getURL(`/carts/${cart?.id}`), {
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
      return cartData;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  const addToCart = async (
    productId: string,
    name: string,
    quantity: number,
    price: number
  ) => {
    try {
      console.log("cart id", cart);
      const response = await fetch(ServiceBase.getURL(`/carts/${cart?.id}`), {
        method: "POST",
        headers: {
          "X-Authorization": ServiceBase.PUBLIC_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: productId,
          name: name,
          quantity: quantity,
          price: price,
        }),
      });
      const cartData = await response.json();
      setaddCart(cartData.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  const removeFromCart = async (itemId: string) => {
    try {
      const currentCartResponse = await fetch(
        ServiceBase.getURL(`/carts/${cart?.id}`),
        {
          method: "GET",
          headers: {
            "X-Authorization": ServiceBase.PUBLIC_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      if (!currentCartResponse.ok) {
        throw new Error(
          `Error fetching current cart: ${currentCartResponse.statusText}`
        );
      }
      const currentCart = await currentCartResponse.json();
      const itemToRemove = currentCart.line_items.find(
        (item: CartItem) => item.id === itemId
      );

      if (!itemToRemove) {
        throw new Error(`Item with ID ${itemId} not found in the cart`);
      }

      if (itemToRemove.quantity > 1) {
        const updateQuantityResponse = await fetch(
          ServiceBase.getURL(`/carts/${cart?.id}/items/${itemId}`),
          {
            method: "PUT",
            headers: {
              "X-Authorization": ServiceBase.PUBLIC_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              quantity: itemToRemove.quantity - 1,
            }),
          }
        );

        if (!updateQuantityResponse.ok) {
          throw new Error(
            `Error updating quantity: ${updateQuantityResponse.statusText}`
          );
        }
      } else {
        const deleteItemResponse = await fetch(
          ServiceBase.getURL(`/carts/${cart?.id}/items/${itemId}`),
          {
            method: "DELETE",
            headers: {
              "X-Authorization": ServiceBase.PUBLIC_KEY,
              "Content-Type": "application/json",
            },
          }
        );

        if (!deleteItemResponse.ok) {
          throw new Error(
            `Error deleting item: ${deleteItemResponse.statusText}`
          );
        }
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
      throw error;
    }
  };

  return (
    <CartContext.Provider
      value={{ setCartId, addCart, addToCart, removeFromCart, fetchCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
export default CartContext;
