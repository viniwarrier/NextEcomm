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

interface Product {
  id: string;
  created: number;
  updated: number;
  active: boolean;
  permalink: string;
  name: string;
  description: string;
  price: {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
  inventory: {
    managed: boolean;
    available: number;
  };
  sku: string | null;
  sort_order: number;
  seo: {
    title: string | null;
    description: string | null;
  };
  thank_you_url: string | null;
  meta: null; 
  conditionals: {
    is_active: boolean;
    is_tax_exempt: boolean;
    is_pay_what_you_want: boolean;
    is_inventory_managed: boolean;
    is_sold_out: boolean;
    has_digital_delivery: boolean;
    has_physical_delivery: boolean;
    has_images: boolean;
    collects_fullname: boolean;
    collects_shipping_address: boolean;
    collects_billing_address: boolean;
    collects_extra_fields: boolean;
  };
  is: {
    active: boolean;
    tax_exempt: boolean;
    pay_what_you_want: boolean;
    inventory_managed: boolean;
    sold_out: boolean;
  };
  has: {
    digital_delivery: boolean;
    physical_delivery: boolean;
    images: boolean;
  };
  collects: {
    fullname: boolean;
    shipping_address: boolean;
    billing_address: boolean;
    extra_fields: boolean;
  };
  checkout_url: {
    checkout: string;
    display: string;
  };
  categories: {
    id: string;
    slug: string;
    name: string;
  }[];
  image: 
   Image;  
}

export default Product;
