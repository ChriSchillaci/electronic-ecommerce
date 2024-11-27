const getUserFirstLetters = (first_name: string, last_name: string) => {
  const getLetters = first_name[0] + last_name[0];

  return getLetters;
};

export default getUserFirstLetters;
