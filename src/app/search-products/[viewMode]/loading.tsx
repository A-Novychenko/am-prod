import { Loader } from '@/components/ui';

export default function Loading() {
  return (
    <Loader
      isSearch
      width="300"
      height="300"
      secondaryColor="rgba(30, 178, 233, 0.3)"
    />
  );
}
