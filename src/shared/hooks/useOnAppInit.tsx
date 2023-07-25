import { useEffect } from 'react';
import useActions from './useActions';

const useOnAppInit = () => {
  const { setMode, setDefaultLng, changeCurrentLng } = useActions();

  const resetTheme = () => {
    const mode = localStorage.getItem('theme') === 'true' ? true : false;

    if (mode) {
      setMode(mode);
    }
  };

  const setDefaultLanguage = () => {
    setDefaultLng(navigator.language);
  };

  const resetCurrentLng = () => {
    const cachedCurrentLng = localStorage.getItem('currentLng');

    if (cachedCurrentLng) {
      changeCurrentLng(cachedCurrentLng);
    }
  };

  useEffect(() => {
    resetTheme();
    setDefaultLanguage();
    resetCurrentLng();
  }, []);
};

export default useOnAppInit;
