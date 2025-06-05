'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify'; // якщо використовуєш React-Toastify

import { Popover } from '@headlessui/react';

import { FaTelegram } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';

import { CartPhoneInput, Recaptcha, RecaptchaRef } from '@/components/ui';

import staticData from '@/data/common.json';
import { addCallback } from '@/actions/servicesAPI';

export const Assistance = () => {
  const { telegram /*, viber*/ } = staticData.contacts;
  const { label, textTG, /*textViber,*/ textReCall } = staticData.assistance;

  const [showRecallInput, setShowRecallInput] = useState(false);
  const [phone, setPhone] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [errors, setErrors] = useState<CartErrors>({});

  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const recaptchaRef = useRef<RecaptchaRef>(null);

  useEffect(() => {
    if (showRecallInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showRecallInput]);

  const handleValidationPhone = (val: string) => {
    const phoneCleaned = val.replace(/\D/g, '');

    if (phoneCleaned.length < 12) {
      setErrors(pS => ({ ...pS, phone: 'phone' }));
    } else {
      setErrors(pS => ({ ...pS, phone: undefined }));
    }
  };

  const handleSubmitValidatePhone = (val: string): string | undefined => {
    const phoneCleaned = val.replace(/\D/g, '');
    if (phoneCleaned.length < 12) {
      return 'phone';
    }
  };

  const handleReCall = async (close: () => void) => {
    if (!showRecallInput) {
      setShowRecallInput(true);
      return;
    }

    const phoneError = handleSubmitValidatePhone(phone);

    const newErrors: CartErrors = {
      phone: phoneError,
    };

    setErrors(newErrors);

    if (phoneError) {
      console.log('error');
      return;
    }

    if (!phone.trim()) {
      toast.error('Введіть номер телефону');
      return;
    }

    if (!captchaToken) {
      setRecaptchaError('Будь ласка, підтвердьте, що Ви не робот.');

      return;
    }

    setRecaptchaError(null);

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

    recaptchaRef.current?.reset();
    setCaptchaToken(null);
  };

  return (
    <Popover className="relative inline-block w-full text-center">
      {({ close }) => (
        <>
          <Popover.Button className="px-4 py-2 text-white transition-all">
            {label}
          </Popover.Button>
          <Popover.Panel
            className="fixed inset-x-0 bottom-0 z-30 w-full rounded-2xl border-t
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
                  <>
                    <CartPhoneInput
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      handleValidationPhone={handleValidationPhone}
                      errors={errors}
                      showLabel={false}
                    />
                    <div className="flex w-full flex-col items-center justify-center">
                      <Recaptcha
                        ref={recaptchaRef}
                        formId="vin"
                        siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                        // onChange={setCaptchaToken}
                        onChange={token => {
                          setCaptchaToken(token);
                          setRecaptchaError(null);
                        }}
                        size="compact"
                      />

                      {recaptchaError && (
                        <div className="mt-2 flex items-center justify-center gap-2 text-sm text-red">
                          <span>{recaptchaError}</span>
                        </div>
                      )}
                    </div>
                  </>
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
