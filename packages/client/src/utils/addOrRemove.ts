const addOrRemove = <T>(array: T[], value: T): void => {
  const index = array.indexOf(value);

  if (index === -1) {
    array.push(value);
  } else {
    array.splice(index, 1);
  }
};

export default addOrRemove;
