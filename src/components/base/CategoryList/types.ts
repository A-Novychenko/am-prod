export type CategoryListProps = {
  data: Category[];
  path: string;
};

type Category = {
  id: number;
  name: string;
  parent_id: number;
  img?: string;
};
