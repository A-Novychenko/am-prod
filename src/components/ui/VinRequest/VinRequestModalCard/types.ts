export type VinRequestModalCardProps = {
  type: '' | 'success' | 'fail' | 'captchaFail' | 'pending';
  data?: {
    number: string;
    vinCode: string;
    brand: string;
    model: string;
    year: string;
    engine: string;
    fuel: string;
    message: string;
    name: string;
    phone: string;
    createdAt: string;
  } | null;
  setStatus: React.Dispatch<
    '' | 'success' | 'fail' | 'captchaFail' | 'pending'
  >;
};
