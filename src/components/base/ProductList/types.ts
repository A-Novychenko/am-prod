export type ProductListProps = {
  products: IASGProduct[];
  viewMode: GalleryViewMode;
  category: string;
  prevCategoryName: string;
  backLink?: boolean;
};
