import { useEffect, useRef, useState } from 'react';

export default function Typewriter({ text, total, speed = 50, delay = 0, className = '' }) {
  if (total) speed = Math.ceil(total / text.length);
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(delay ? false : true)

  useEffect(() => {
    if (!isReady) return;
    const el = containerRef.current;
    let i = 0;

    const type = () => {
      if (i < text.length) {
        el.textContent += text[i];
        i++;
        setTimeout(type, speed);
      }
    };

    // 清空并开始打字
    el.textContent = '';
    type();
  }, [text, speed, isReady]);

  useEffect(() => {
    if (!isReady) setTimeout(() => setIsReady(true), delay);
  }, []);
  if (!isReady) return null;

  return (
    <div
      ref={containerRef}
      className={`whitespace-pre-line font-mono text-cyan-400 ${className}`}
    ></div>
  );
}

