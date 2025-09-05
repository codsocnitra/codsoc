import React from "react";

const desc = [
  "CodSoc’25 is introducing an exceptionally designed platform to boost coding skills, collaboration, and innovation among students.",
  "At CodSoc’25, we craft experiences that empower coders to learn, build, and achieve remarkable results.",
  "Driven by passion, CodSoc’25 delivers innovative opportunities where students code, collaborate, and conquer together.",
  "CodSoc’25 — designed to spark creativity, sharpen skills, and accelerate success.",
];

const TopHeaderOne: React.FC = () => {
  const randomText = desc[Math.floor(Math.random() * desc.length)];

  return (
    <div className="bg-main-600 tw-py-205 d-sm-block d-none">
      <div className="container">
        <div className="d-flex justify-content-center">
          <p className="text-white bg-white-13 d-inline-block tw-py-1 tw-px-5 rounded-pill fw-normal">
            {randomText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderOne;
