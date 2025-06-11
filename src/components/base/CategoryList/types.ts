export type CategoryListProps = {
  data: Category[];
  link: string;
  page?: string;
};

type Category = {
  id: number;
  name: string;
  parent_id: number;
  img?: string;
};
