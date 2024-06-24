export const dateSetter = () => {
  const getTodayDate = (): string => {
    const today = new Date().toLocaleDateString().split('/').join('-');
    return today;
  };

  const getOneMonthFromToday = (): string => {
    const today = new Date();
    const pastDate = new Date(today);
    pastDate.setDate(pastDate.getDate() - 30);
    const formattedPastDate = pastDate
      .toLocaleDateString()
      .split('/')
      .join('-');
    return formattedPastDate;
  };

  return {
    getTodayDate,
    getOneMonthFromToday,
  };
};
