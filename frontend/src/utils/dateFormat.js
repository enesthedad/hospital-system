export const dateFormatter = (exFormat) => {
  const iso = exFormat;
  const parsedFormat = new Date(iso);
  const formatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const readableDate = parsedFormat.toLocaleDateString("tr-TR", formatOptions);
  return readableDate;
};
