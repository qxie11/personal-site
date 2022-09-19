import { useEffect } from 'react';
import useActions from './useActions';

const useOnAppInit = () => {
  const { setMode, setDefaultLng } = useActions();

  const resetTheme = () => {
    const mode = localStorage.getItem('theme') === 'true' ? true : false;

    if (mode) {
      setMode(mode);
    }
  };

  const setDefaultLanguage = () => {
    setDefaultLng(navigator.language);
  }

  useEffect(() => {
    resetTheme();
    setDefaultLanguage();
  }, []);
};

export default useOnAppInit;
