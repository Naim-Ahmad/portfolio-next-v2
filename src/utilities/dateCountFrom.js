export const yearCountFrom = (date) => {
  const dateCount = new Date().getFullYear() - new Date(date).getFullYear();
  return dateCount;
};
