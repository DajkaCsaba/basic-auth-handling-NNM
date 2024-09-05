import { useState, useEffect } from 'react';

const useIsPortrait = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(orientation: portrait)');
    const handleOrientationChange = () => {
      setIsPortrait(mediaQuery.matches);
    };
    mediaQuery.addEventListener('change', handleOrientationChange);
    handleOrientationChange();
    return () =>
      mediaQuery.removeEventListener('change', handleOrientationChange);
  }, []);

  return isPortrait;
};

export default useIsPortrait;
