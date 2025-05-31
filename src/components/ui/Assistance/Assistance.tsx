'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify'; // якщо використовуєш React-Toastify

import { Popover } from '@headlessui/react';

import { FaTelegram } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';

import staticData from '@/data/common.json';
import { addCallback } from '@/actions/servicesAPI';

export const Assistance = () => {
  const { telegram /*, viber*/ } = staticData.contacts;
  const { label, textTG, /*textViber,*/ textReCall } = staticData.assistance;

  const [showRecallInput, setShowRecallInput] = useState(false);
  const [phone, setPhone] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (showRecallInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showRecallInput]);

  const handleReCall = async (close: () => void) => {
    if (!showRecallInput) {
      setShowRecallInput(true);
      return;
    }

    if (!phone.trim()) {
      toast.error('Введіть номер телефону');
      return;
    }

    try {
      const res = await addCallback({ phone });

      if (res.code !== 201) throw new Error('Запит не вдався');

      toast.success('Дякуємо! Очікуйте дзвінка');
      setShowRecallInput(false);
      setPhone('');
      close();
    } catch (err) {
      toast.error('Сталася помилка. Спробуйте пізніше');
    }
  };

  return (
    <Popover className="relative inline-block w-full text-center">
      {({ close }) => (
        <>
          <Popover.Button className="px-4 py-2 text-white transition-all">
            {label}
          </Popover.Button>
          <Popover.Panel
            className="fixed inset-x-0 z-30 w-full rounded-2xl border-t
       border-white/10 bg-darkBg p-6 text-primaryText shadow-2xl
       md:absolute md:left-1/2 md:mt-2 md:w-64 md:-translate-x-1/2 md:rounded-2xl md:border
        md:border-white/10 md:bg-darkBg md:p-6 md:shadow-xl"
          >
            <div className="flex flex-col gap-4 text-sm">
              <Link
                href={`tg://resolve?domain=${telegram}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#229ED9] px-4 py-2 text-center text-white transition-colors hover:bg-[#1e8dbf]"
              >
                {textTG}
                <FaTelegram size={20} />
              </Link>

              {/*
          <Link
            href={`viber://chat?number=${viber}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="rounded-lg bg-[#665CAC] px-4 py-2 text-white text-center hover:bg-[#584f9b] transition-colors"
          >
            {textViber}
          </Link>
          */}

              <div className="flex flex-col gap-4 text-sm">
                {/* ... інші кнопки */}

                {showRecallInput && (
                  <input
                    ref={inputRef}
                    type="tel"
                    placeholder="+38 (0__) ___-__-__"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="rounded-lg border border-white/20 bg-gray-800 px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                )}

                <button
                  type="button"
                  onClick={() => {
                    handleReCall(close);
                  }}
                  className="flex items-center justify-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-white transition-colors hover:bg-gray-600"
                >
                  {showRecallInput ? 'Відправити номер' : textReCall}
                  <IoIosCall size={20} />
                </button>
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};
