const modeToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);
  const {
    mode: { isDarkMode },
  } = store.getState();

  if (isDarkMode.toString() !== localStorage.getItem('theme')) {
    localStorage.setItem('theme', isDarkMode.toString());
  }

  return result;
};

export default modeToLocalStorage;
