export const getFormattedDate = (date, divider = '-') => {
  return date.slice(0, 10).split('-').reverse().join(divider);
};
