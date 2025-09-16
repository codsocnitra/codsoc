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

    // Handle tab visibility
    const handleVisibility = () => {
      const visible = !document.hidden;
      cursorInner.style.display = visible ? "block" : "none";
      cursorOuter.style.display = visible ? "block" : "none";
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("visibilitychange", handleVisibility);

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
      document.removeEventListener("visibilitychange", handleVisibility);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverClass);
        el.removeEventListener("mouseleave", removeHoverClass);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorOuterRef} className="mouseCursor cursor-outer"></div>
      <div ref={cursorInnerRef} className="mouseCursor cursor-inner"></div>
      <style jsx global>{`
        .mouseCursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          visibility: hidden;
        }

        .cursor-inner {
          width: 6px;
          height: 6px;
          background: black;
        }

        .cursor-outer {
          border: 2px solid black;
        }

        /* Hide on mobile / small devices */
        @media (max-width: 768px) {
          .mouseCursor {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
