export const dateStringToDate = (dateString: string): Date => {
  // 24/10/2019
  const dateParts = dateString
    .split('/') // ['24', '10', '2019]
    .map((value: string): number => {
      return parseInt(value);
    });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
