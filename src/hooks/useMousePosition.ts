import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updater = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updater);
    return () => {
      window.removeEventListener("mousemove", updater);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
