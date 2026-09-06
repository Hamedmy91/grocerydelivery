export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  unit: string;
  stock: number;
  isOrganic: boolean;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
  discount: number;
}
export interface IGetProduct {
  products: IProduct[];
  success: boolean;
}
