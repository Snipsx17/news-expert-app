import { AppLogo } from './components/AppLogo';
import { SearchNews } from './components/SearchNews';

export const NewsExpertApp = () => {
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
