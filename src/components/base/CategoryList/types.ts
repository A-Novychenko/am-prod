export type CategoryListProps = {
  data: Category[];
  path: string;
  nameCat?: string;
};

type Category = {
  id: number;
  name: string;
  parent_id: number;
};
