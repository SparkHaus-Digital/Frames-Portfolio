import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GsapBox() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 200,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        ref={boxRef}
        className="w-20 h-20 bg-blue-500 rounded-lg shadow-lg"
      ></div>
    </div>
  );
}
