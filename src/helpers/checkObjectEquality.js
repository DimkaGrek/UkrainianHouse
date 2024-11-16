export const checkObjectEquality = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every((key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];

    return val1 instanceof Date && val2 instanceof Date
      ? val1.getTime() === val2.getTime()
      : val1 === val2;
  });
};
