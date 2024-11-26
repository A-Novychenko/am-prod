// 'use client';

// import { useState } from 'react';
// import SearchIcon from '~/icons/search-icon.svg';

// import staticData from '@/data/common.json';
// import { getProductsByTecDocArticle } from '@/actions/servicesAPI/getProductsByTecDocArticle';

// export const SearchBar = () => {
//   const { placeholder, ariaLabelBtn, ariaLabelIcon } = staticData.searchInput;

//   const [searchQuery, setSearchQuery] = useState('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Submitted search query:', searchQuery);

//     const { products } = await getProductsByTecDocArticle(searchQuery);

//     console.log('products', products);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="relative">
//       <input
//         className="w-full rounded-md p-2 pr-10 text-secondaryText xl:w-[300px] xl:text-[20px]"
//         placeholder={placeholder}
//         value={searchQuery}
//         onChange={handleInputChange}
//       />

//       <button type="submit" aria-label={ariaLabelBtn}>
//         <SearchIcon
//           width={40}
//           height={40}
//           className="absolute right-0 top-0 p-2"
//           aria-label={ariaLabelIcon}
//         />
//       </button>
//     </form>
//   );
// };

'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SearchIcon from '~/icons/search-icon.svg';

import staticData from '@/data/common.json';
import { getProductsByTecDocArticle } from '@/actions/servicesAPI/getProductsByTecDocArticle';

export const SearchBar = () => {
  const { placeholder, ariaLabelBtn, ariaLabelIcon } = staticData.searchInput;

  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted search query:', searchQuery);

    const { products } = await getProductsByTecDocArticle(
      searchQuery.trim().toUpperCase(),
    );

    setSearchQuery('');

    if (products) {
      // Перетворюємо продукти на строку, оскільки передача складних об'єктів в URL не підтримується безпосередньо
      const productsParam = encodeURIComponent(JSON.stringify(products));

      // Переходимо на сторінку продукту з query параметром
      router.push(`/search-products?products=${productsParam}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        className="w-full rounded-md p-2 pr-10 text-secondaryText xl:w-[300px] xl:text-[20px]"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleInputChange}
      />

      <button type="submit" aria-label={ariaLabelBtn}>
        <SearchIcon
          width={40}
          height={40}
          className="absolute right-0 top-0 p-2"
          aria-label={ariaLabelIcon}
        />
      </button>
    </form>
  );
};
