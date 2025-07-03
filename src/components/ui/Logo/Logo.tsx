// import Image from 'next/image';
import Link from 'next/link';

export const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex  flex-col  items-center ">
      <div className="size-[80px] md:size-[80px]">
        {/* <Image
          priority
          src="/images/logo.png"
          width={1340}
          height={1340}
          alt="Логотип компанії, червона літера А зверху та жовта літера М знизу та нижній надпиc - адреса сайту"
          className="size-full object-cover"
        /> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          width={1340}
          height={1340}
          alt="Логотип компанії, червона літера А зверху та жовта літера М знизу та нижній надпиc - адреса сайту"
          className="size-full object-cover"
        />
      </div>

      <div className="h-[20px] w-[190px] md:h-5 md:w-auto xl:h-[28px]">
        {/* <Image
          priority
          src="/images/text-logo.png"
          width={727}
          height={77}
          alt="Логотип компанії, червона літера А зверху та жовта літера М знизу та нижній надпиc - адреса сайту"
          className="size-full object-cover"
        /> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/text-logo.png"
          width={727}
          height={77}
          alt="Логотип компанії, червона літера А зверху та жовта літера М знизу та нижній надпиc - адреса сайту"
          className="size-full object-cover"
        />
      </div>
    </Link>
  );
};
