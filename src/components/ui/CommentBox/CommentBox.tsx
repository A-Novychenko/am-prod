'use client';

import { useState } from 'react';

export const CommentBox = ({ comment }: { comment: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 flex justify-center xl:w-[330px]">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-4 shadow-sm xl:max-w-full">
        <h3 className="mb-4 text-center text-[18px] font-bold">Коментар</h3>

        <p className="xl:hidden">{comment}</p>

        <p
          className="hidden cursor-pointer xl:line-clamp-5"
          onClick={() => setOpen(true)}
        >
          {comment}
        </p>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-w-lg rounded-lg bg-white p-6 shadow-lg">
            <h4 className="mb-4 text-lg font-semibold">Повний коментар</h4>
            <p className="mb-6">{comment}</p>
            <button
              onClick={() => setOpen(false)}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
