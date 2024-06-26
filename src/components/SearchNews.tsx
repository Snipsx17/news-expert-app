import { useState } from 'react';
import { Button } from './Button';
import { DateSelector } from './DateSelector';
import { FormInput } from './FormInput';

type Props = {
  subTitle?: string;
  setSearchParameters: (searchData: {
    searchParameter: string;
    fromDate: string;
  }) => void;
};

export const SearchNews = ({ subTitle, setSearchParameters }: Props) => {
  const [dateValue, setDateValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateValue(e.target.value);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchParameters({
      searchParameter: inputValue,
      fromDate: dateValue,
    });
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <div className="search-bar">
          <FormInput
            type="text"
            id="search-input"
            label={subTitle}
            placeholder="Type something"
            value={inputValue}
            onChangeHandler={onChangeInput}
          />
          <DateSelector onChangeHandler={onChangeDate} value={dateValue} />
        </div>
        <Button text="Find News" />
      </form>
    </>
  );
};
