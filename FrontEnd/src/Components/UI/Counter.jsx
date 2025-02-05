import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 16); // 60 frames per second

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16); // 16ms for 60fps

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref}>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;