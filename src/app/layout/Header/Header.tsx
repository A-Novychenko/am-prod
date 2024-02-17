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
        <div className="flex items-center justify-between  py-6">
          <Logo />

          <WorkSchedule />
          <div className="flex flex-col items-center gap-2 pt-8">
            <SearchBar />
            <Assistance />
          </div>

          <Contacts />

          <Cart />
        </div>
        <NavLinks />
      </div>
    </header>
  );
};
