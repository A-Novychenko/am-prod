// import { SearchProducts } from '@/components/ui';

// const SearchProductPage = () => {
//   return (
//     <section className="section">
//       <div className="container">
//         <h1>Пошук товарів</h1>

//         <SearchProducts />
//       </div>
//     </section>
//   );
// };

// export default SearchProductPage;

import dynamic from 'next/dynamic';

const SearchProducts = dynamic(
  () => import('@/components/ui/SearchProducts/SearchProducts'),
  {
    ssr: false,
  },
);

export default function SearchProductPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Пошук товарів</h1>

        <SearchProducts />
      </div>
    </section>
  );
}
