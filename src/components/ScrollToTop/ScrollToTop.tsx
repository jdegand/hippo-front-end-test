import React, { useEffect, useState } from 'react';
import './ScrollToTop.scss';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollY = () => {
    if (window.scrollY > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollY);

    return () => window.removeEventListener('scroll', checkScrollY);
  }, []);

  const scroll = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  const content = isVisible ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      onClick={scroll}
    >
      <path
        fill="#2d89f3"
        d="M13,18V10L16.5,13.5L17.92,12.08L12,6.16L6.08,12.08L7.5,13.5L11,10V18H13M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"
      />
    </svg>
  ) : null;

  return <>{content}</>;
}

export default ScrollToTop;
