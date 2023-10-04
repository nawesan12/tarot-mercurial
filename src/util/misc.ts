const calculateUserAge = (date: string): number | null => {
  const birth = new Date(date);
  const today = new Date();

  if (isNaN(birth.getTime())) return null;

  const age = today.getFullYear() - birth.getFullYear();

  return today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
    ? age - 1
    : age;
};
