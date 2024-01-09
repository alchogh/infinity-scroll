import { RefObject, useEffect, useState } from "react";

type UseIntersectionObserverHook = (
  ref: RefObject<Element>,
  options?: IntersectionObserverInit
) => boolean;

const useIntersaction: UseIntersectionObserverHook = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isVisible;
};

export default useIntersaction;
