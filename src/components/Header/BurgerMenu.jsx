import { useCallback, useState } from 'react';

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggleMenu();
    }
  };

  return <></>;
};
