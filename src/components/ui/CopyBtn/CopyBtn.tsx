'use client';

import { useState } from 'react';

import { IoCopyOutline } from 'react-icons/io5';

export const CopyBtn = ({ orderLink }: { orderLink: string }) => {
  const [showTip, setShowTip] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(orderLink);
      setShowTip(true);
      setTimeout(() => setShowTip(false), 1500);
    } catch (err) {
      // handle error
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-200"
      >
        Скопіювати
        <IoCopyOutline className="size-4" />
      </button>

      {showTip && (
        <div className="absolute left-2/3 top-0 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white shadow">
          Скопійовано!
        </div>
      )}
    </div>
  );
};
