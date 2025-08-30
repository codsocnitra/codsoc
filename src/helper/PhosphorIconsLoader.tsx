"use client";
import { useEffect } from "react";

const PhosphorIconsLoader: React.FC = () => {
  useEffect(() => {
    const head = document.head;
    const weights: string[] = [
      "regular",
      "thin",
      "light",
      "bold",
      "fill",
      "duotone",
    ];

    weights.forEach((weight) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = `https://unpkg.com/@phosphor-icons/web@2.1.1/src/${weight}/style.css`;
      head.appendChild(link);
    });
  }, []);

  return null;
};

export default PhosphorIconsLoader;
