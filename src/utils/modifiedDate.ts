const modifiedDate = (date: string) => {
  const splittedData = date.split("T")[0];
  const modifiedDate = splittedData.replaceAll("-", "/");

  return modifiedDate;
};

export default modifiedDate;
