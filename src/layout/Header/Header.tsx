import {
  Assistance,
  Cart,
  Contacts,
  Logo,
  NavLinks,
  SearchBar,
  WorkSchedule,
} from '@/components/ui';

export const Header = () => {
  return (
    <header className=" bg-darkBg text-primaryText">
      <div className="container">
        <div className="flex flex-col py-6 xl:flex-row xl:items-center  xl:justify-between">
          <div className="flex items-center justify-between xl:gap-12 smOnly:order-1 smOnly:mb-4">
            <Logo />

            <WorkSchedule />
          </div>

          <div className="items-center gap-2 pt-8 xl:flex xl:flex-col smOnly:order-3">
            <SearchBar />

            <Assistance />
          </div>

          <div className="flex items-center justify-between xl:gap-12 smOnly:order-2 smOnly:mb-4">
            <Contacts />

            <Cart />
          </div>
        </div>

        <NavLinks />
      </div>
    </header>
  );
};
