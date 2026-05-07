import React, {useEffect, useState} from 'react';
import OriginalDocItemLayout from '@theme-original/DocItem/Layout';

export default function DocItemLayout(props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, {passive: true});
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <>
      <div className="doc-reading-progress" aria-hidden="true">
        <div className="doc-reading-progress__bar" style={{width: `${progress}%`}} />
      </div>
      <OriginalDocItemLayout {...props} />
    </>
  );
}
