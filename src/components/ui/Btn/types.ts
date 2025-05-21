export type BtnProps = {
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit';
  styleType?: 'primary' | 'secondary' | 'accent';
  className?: string;
};
