import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [scrollValue, setScrollValue] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const calcScrollValue = () => {
    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = Math.round((pos * 100) / calcHeight);

    setScrollValue(scroll);
    setShowProgress(pos > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', calcScrollValue);
    calcScrollValue();

    return () => {
      window.removeEventListener('scroll', calcScrollValue);
    };
  }, []);

  const handleScrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      id="progress"
      onClick={handleScrollToTop}
      className={showProgress ? 'progress active' : 'progress'}
      style={{
        background: `conic-gradient(#228b22 ${scrollValue}%, transparent ${scrollValue}%)`,
      }}
    >
      <h1 id="progress-value">{scrollValue}%</h1>
    </div>
  );
}

export default ScrollProgress;
