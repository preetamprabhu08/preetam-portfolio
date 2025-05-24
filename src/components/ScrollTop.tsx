import React from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollTop: React.FC = () => {
  return (
    <button
      onClick={() => scroll.scrollToTop({ duration: 500 })}
      className="fixed right-5 bottom-5 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollTop;