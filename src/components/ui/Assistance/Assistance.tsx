'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

import { FaTelegram } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';

import { CartPhoneInput, Recaptcha, RecaptchaRef } from '@/components/ui';
import staticData from '@/data/common.json';
import { addCallback } from '@/actions/servicesAPI';

export const Assistance = () => {
  const { telegram } = staticData.contacts;
  const { label, textTG, textReCall } = staticData.assistance;

  const [isOpen, setIsOpen] = useState(false);
  const [showRecallInput, setShowRecallInput] = useState(false);
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ phone?: string }>({});
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

  const recaptchaRef = useRef<RecaptchaRef>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const togglePopover = () => {
    setIsOpen(prev => !prev);
    setShowRecallInput(false);
  };

  const closePopover = () => {
    setIsOpen(false);
    setShowRecallInput(false);
    setPhone('');
    setErrors({});
    setCaptchaToken(null);
    setRecaptchaError(null);
    recaptchaRef.current?.reset();
    buttonRef.current?.focus();
  };

  const validatePhone = (value: string): boolean => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length < 12) {
      setErrors({ phone: 'Некоректний номер телефону' });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      panelRef.current &&
      !panelRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      closePopover();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closePopover();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (errors.phone) validatePhone(e.target.value);
  };

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (recaptchaError) setRecaptchaError(null);
  };

  const onSubmit = async () => {
    if (!validatePhone(phone)) {
      toast.error('Некоректний номер телефону');
      return;
    }
    if (!captchaToken) {
      setRecaptchaError('Будь ласка, підтвердьте, що Ви не робот.');
      return;
    }
    setRecaptchaError(null);

    try {
      const res = await addCallback({ phone, captchaToken });
      if (res.code !== 201) throw new Error('Помилка сервера');

      toast.success('Дякуємо! Очікуйте дзвінка');
      closePopover();
    } catch {
      toast.error('Сталася помилка. Спробуйте пізніше');
    }
  };

  return (
    <div className="relative inline-block w-full text-center">
      <button
        ref={buttonRef}
        type="button"
        onClick={togglePopover}
        className="rounded-[4px] px-4 py-2 text-white transition-all hover:bg-mediumBg/20 focus:bg-mediumBg/20 focus:outline-none focus-visible:ring"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {label}
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          id="assistance-popover"
          role="dialog"
          aria-modal="true"
          className="absolute z-50 mt-2 w-64 rounded-2xl border border-white/10 bg-darkBg p-6 text-primaryText shadow-xl"
          style={{ right: 0 }}
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

            {!showRecallInput ? (
              <button
                type="button"
                onClick={() => setShowRecallInput(true)}
                className="flex items-center justify-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-white transition-colors hover:bg-gray-600 focus:bg-gray-600"
              >
                {textReCall} <IoIosCall size={20} />
              </button>
            ) : (
              <>
                <CartPhoneInput
                  value={phone}
                  onChange={onPhoneChange}
                  handleValidationPhone={validatePhone}
                  errors={errors}
                  showLabel={false}
                />

                <div className="flex w-full flex-col items-center justify-center">
                  <Recaptcha
                    ref={recaptchaRef}
                    formId="vin"
                    siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={onCaptchaChange}
                    size="compact"
                  />
                  {recaptchaError && (
                    <p className="mt-2 text-sm text-red">{recaptchaError}</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={onSubmit}
                  className="flex items-center justify-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-white transition-colors hover:bg-gray-600"
                >
                  Відправити номер <IoIosCall size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
