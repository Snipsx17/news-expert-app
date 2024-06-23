/// <reference types="vite-plugin-svgr/client" />
import CalendarIcon from '../assets/calendar-icon.svg?react';

type Props = {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const DateSelector = ({ onChangeHandler, value }: Props) => {
  return (
    <div className="calendar-selector">
      <input type="date" onChange={onChangeHandler} value={value} />
      <CalendarIcon width={30} height={30} />
    </div>
  );
};
