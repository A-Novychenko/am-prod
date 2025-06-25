interface IASGProduct {
  _id: string;
  id: number;

  category: string;
  category_id: number;

  brand: string;
  article: string;
  tecdoc_article: string;

  name: string;
  description: string;
  img: string[];
  createdAt: string;
  updatedAt: string;

  count_warehouse_3: string;
  count_warehouse_4: string;
  price: number;
  price_promo: number | null;
  banner: boolean;
  sale: boolean;
}

type GalleryViewMode = 'list' | 'grid';
