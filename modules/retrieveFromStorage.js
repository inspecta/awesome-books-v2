const retrieveFromLocalStorage = (key) => {
  const fromStorage = JSON.parse(localStorage.getItem(key)) || [];
  return fromStorage;
};

export default retrieveFromLocalStorage;