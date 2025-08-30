"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const RouteScrollToTop: React.FC = () => {
  const location = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const progressWrap = document.querySelector(
      ".progress-wrap"
    ) as HTMLElement | null;
    const progressPath = document.querySelector(
      ".progress-wrap path"
    ) as SVGPathElement | null;

    if (!progressWrap || !progressPath) return;

    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = "none";
    progressPath.style.webkitTransition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength.toString();

    progressPath.getBoundingClientRect(); // Force reflow

    progressPath.style.transition = "stroke-dashoffset 10ms linear";
    progressPath.style.webkitTransition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress.toString();
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        progressWrap.classList.add("active-progress");
      } else {
        progressWrap.classList.remove("active-progress");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    progressWrap.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("scroll", handleScroll);
      progressWrap.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <button
      className='progress-wrap'
      aria-label='scroll indicator'
      title='Back to top'
    >
      <span />
      <svg
        className='progress-circle svg-content'
        width='100%'
        height='100%'
        viewBox='-1 -1 102 102'
      >
        <path d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98' />
      </svg>
    </button>
  );
};

export default RouteScrollToTop;
