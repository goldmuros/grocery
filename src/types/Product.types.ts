export interface IProductInfo {
  id: string;
  image_url: string;
  stock: number;
  productName: string;
  price: number;
  productDescription: string;
  favorite: string;
}

export interface IProductCartInfo extends IProductInfo {
  totalPrice: number;
  quantity: number;
}
