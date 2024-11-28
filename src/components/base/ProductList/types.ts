export type ProductListProps = {
  products: Product[];
  viewMode: string;
  category: string;
  categoryName: string;
};

export type Product = {
  _id: string;
  id: number;
  cid: string;
  category: string;
  category_id: number;
  brand: string;
  article: string;
  tecdoc_article: string;
  name: string;
  description: string;
  price: string;
  count_warehouse_3: string;
  img?: string;
  createdAt: string;
  updatedAt: string;
};
