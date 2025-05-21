export type DeliveryMethod = 'pickup' | 'post';

export type DeliveryFormProps = {
  deliveryMethod: DeliveryMethod;
  setDeliveryMethod: React.Dispatch<React.SetStateAction<DeliveryMethod>>;
  className?: string;
};
