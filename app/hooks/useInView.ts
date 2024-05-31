import { useEffect, useRef, useState } from "react";

export const useOnScreenObserver = () => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observerOptions = {
      root: null,
    };

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      observerOptions
    );

    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isIntersecting };
};
