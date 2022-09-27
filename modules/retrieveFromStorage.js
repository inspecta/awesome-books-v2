const retrieveFromLocalStorage = (key) => {
  const fromStorage = JSON.parse(localStorage.getItem(key)) || null;
  return fromStorage;
};

export default retrieveFromLocalStorage;