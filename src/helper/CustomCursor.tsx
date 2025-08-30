"use client";

import { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorOuterRef = useRef<HTMLDivElement | null>(null);
  const cursorInnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursorOuter = cursorOuterRef.current;
    const cursorInner = cursorInnerRef.current;

    if (!cursorOuter || !cursorInner) return;

    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorInner.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      cursorOuter.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const addHoverClass = () => {
      cursorInner.classList.add("cursor-hover");
      cursorOuter.classList.add("cursor-hover");
    };

    const removeHoverClass = () => {
      cursorInner.classList.remove("cursor-hover");
      cursorOuter.classList.remove("cursor-hover");
    };

    document.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(
      "a, button, .cursor-pointer"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverClass);
      el.addEventListener("mouseleave", removeHoverClass);
    });

    cursorInner.style.visibility = "visible";
    cursorOuter.style.visibility = "visible";

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverClass);
        el.removeEventListener("mouseleave", removeHoverClass);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorOuterRef} className='mouseCursor cursor-outer'></div>
      <div ref={cursorInnerRef} className='mouseCursor cursor-inner'></div>
    </>
  );
};

export default CustomCursor;
