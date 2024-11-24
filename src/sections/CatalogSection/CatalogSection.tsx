import { getMainCategories } from '@/actions/servicesAPI/getMainCategories';

import { CategoryList } from '@/components/base';

export const CatalogSection: React.FC = async () => {
  const mainCategories = await getMainCategories();

  return (
    mainCategories && (
      <section className="section bg-darkBg" id="main-cat">
        <div className="container">
          <CategoryList data={mainCategories} path="categories" />
        </div>
      </section>
    )
  );
};
