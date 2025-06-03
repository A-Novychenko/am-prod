import Image from 'next/image';
import Link from 'next/link';

export const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex flex-col items-center">
      <div className="h-[80px] md:size-[114px]">
        <Image
          priority
          src="/images/logo.png"
          width={1340}
          height={1340}
          alt="Логотип компанії, червона літера А зверху та жовта літера М знизу та нижній надпиc - адреса сайту"
          className="size-full object-cover"
        />
      </div>

      <div className="h-4 md:h-5 xl:h-[24px]">
        <Image
          priority
          src="/images/text-logo.png"
          width={1340}
          height={1340}
          alt="Логотип компанії, червона літера А зверху та жовта літера М знизу та нижній надпиc - адреса сайту"
          className="size-full object-cover"
        />
      </div>
    </Link>
  );
};
