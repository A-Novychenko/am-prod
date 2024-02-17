'use client';

import SearchIcon from '~/icons/search-icon.svg';

import staticData from '@/data/common.json';

export const SearchBar = () => {
  const { placeholder, ariaLabelBtn, ariaLabelIcon } = staticData.searchInput;
  return (
    <div className="relative">
      <input
        className="w-[300px] rounded-md p-2 pr-10 text-[20px] text-secondaryText"
        placeholder={placeholder}
      />

      <button type="button" aria-label={ariaLabelBtn}>
        <SearchIcon
          width={40}
          height={40}
          className="absolute right-0 top-0 p-2"
          aria-label={ariaLabelIcon}
        />
      </button>
    </div>
  );
};
