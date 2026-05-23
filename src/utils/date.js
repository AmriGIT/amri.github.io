export const getDurationLabel = (start, end = new Date()) => {
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return `${years} years${remainingMonths ? ` ${remainingMonths} months` : ""}`;
};
