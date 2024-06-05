import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const options = {
    threshold: 0.5,
  };
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, options);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    } else {
      console.error(" not found");
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div className="content" id="content1">
        <span>콘텐츠 1</span>
      </div>
      <div className="content" id="content2">
        <span>콘텐츠 2</span>
      </div>
      <div
        className={`content ${isVisible ? "visible" : ""}`}
        id="content3"
        ref={ref}
      >
        <span>콘텐츠 3</span>
      </div>
      <div className="content" id="content4">
        <span>콘텐츠 4</span>
      </div>
      <div className="content" id="content5">
        <span>콘텐츠 5</span>
      </div>
      <div className="content" id="content6">
        <span>콘텐츠 6</span>
      </div>
      <div className="content" id="content7">
        <span>콘텐츠 7</span>
      </div>
    </>
  );
}

export default App;
