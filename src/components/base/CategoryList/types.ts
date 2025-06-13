export type CategoryListProps = {
  data: Category[];
  link: string;
  page?: string;
  isMainCategory?: boolean;
};

type Category = {
  id: number;
  name: string;
  parent_id: number;
  img?: string;
  hasChildren: boolean;
  hasProducts: boolean;
};
