import { ServiceBase } from "./service-base";
export class ProductService extends ServiceBase {
  static getProducts = async (): Promise<Response> => {
    try {
      const response = await fetch(ServiceBase.getURL("/products"), {
        headers: {
          "X-Authorization": ServiceBase.PUBLIC_KEY,
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
  static getProductById = async (productId: string): Promise<Response> => {
    try {
      var response = await fetch(ServiceBase.getURL(`/products/${productId}`), {
        headers: {
          "X-Authorization": ServiceBase.PUBLIC_KEY,
          "Content-Type": "application/json",
        },
      });

      return response;
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
      throw error;
    }
  };
}
