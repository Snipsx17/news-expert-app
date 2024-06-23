import { AppLogo } from './components/AppLogo';
import { SearchNews } from './components/SearchNews';
import { useFetchNews } from './hooks/useFetchNews';

export const NewsExpertApp = () => {
  useFetchNews('motos');

  return (
    <>
      {/* logo */}
      <AppLogo />

      {/* search bar with date selector */}
      <SearchNews subTitle="Type to find news" />

      {/* news grid */}

      {/* footer */}
    </>
  );
};
