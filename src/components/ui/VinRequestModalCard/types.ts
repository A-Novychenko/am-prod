export type VinRequestModalCardProps = {
  type: 'success' | 'fail';
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
};
