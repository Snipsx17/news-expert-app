import { useState } from 'react';
import { AppLogo } from './components/AppLogo';
import { SearchNews } from './components/SearchNews';

type searchParameters = { searchParameter: string; fromDate: string };

export const NewsExpertApp = () => {
  const [searchData, setSearchData] = useState<searchParameters>({
    searchParameter: '',
    fromDate: '',
  });

  const setSearchParameters = (searchParams: searchParameters) => {
    setSearchData(searchParams);
  };
  console.log(searchData);

  return (
    <>
      {/* logo */}
      <AppLogo />

      {/* search bar with date selector */}
      <SearchNews
        subTitle="Type to find news"
        setSearchParameters={setSearchParameters}
      />

      {/* news grid */}

      {/* footer */}
    </>
  );
};
