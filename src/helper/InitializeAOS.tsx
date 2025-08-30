"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InitializeAOS: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    AOS.init({ once: true });
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return null;
};

export default InitializeAOS;
