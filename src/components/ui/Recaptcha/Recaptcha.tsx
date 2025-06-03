'use client';

import { useRef, useImperativeHandle, forwardRef } from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

type RecaptchaProps = {
  formId: 'vin' | 'checkout' | 'callback' | string;
  siteKey: string;
  size?: 'compact' | 'normal' | 'invisible';
  onChange: (token: string | null) => void;
  onError?: () => void;
  onExpired?: () => void;
};

export type RecaptchaRef = {
  reset: () => void;
};

export const Recaptcha = forwardRef<RecaptchaRef, RecaptchaProps>(
  ({ formId, siteKey, onChange, onError, onExpired }, ref) => {
    const captchaRef = useRef<ReCAPTCHA>(null);

    useImperativeHandle(ref, () => ({
      reset: () => {
        captchaRef.current?.reset();
      },
    }));

    return (
      <div id={`recaptcha-${formId}`}>
        <ReCAPTCHA
          size="compact"
          ref={captchaRef}
          sitekey={siteKey}
          onChange={onChange}
          onErrored={onError}
          onExpired={() => {
            onChange(null);
            onExpired?.();
          }}
        />
      </div>
    );
  },
);

Recaptcha.displayName = 'Recaptcha';
