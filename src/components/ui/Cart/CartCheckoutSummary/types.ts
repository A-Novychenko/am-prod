import { SetStateAction } from 'react';

import { RecaptchaRef } from '@/components/ui';

export type CartCheckoutSummaryProps = {
  hasContactsData: HasContactsData;
  checkoutState: CheckoutState;
  hasUnavailableItem: HasUnavailableItem;
  handleSubmitCart: () => void;
  errors: CartErrors;
  setCaptchaToken: React.Dispatch<SetStateAction<string | null>>;
  recaptchaRef: React.RefObject<RecaptchaRef>;
};
