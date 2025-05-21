type FormData = {
  name: string;
  phone: string;
  email: string;
  comment: string;
};

type SetFormData = React.Dispatch<React.SetStateAction<FormData>>;

export type CartContactFormProps = {
  formData: FormData;
  setFormData: SetFormData;
  className?: string;
};
