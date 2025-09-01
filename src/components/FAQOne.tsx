"use client";
import Image from "next/image";
import React from "react";

const WorkingProcess: React.FC = () => {
  const processSteps = [
    {
      title: "Learn",
      content:
        "Fundamentals of coding, advanced algorithms, and trending technologies. Weekly sessions, workshops, and curated learning paths.",
      img: "/assets/images/process/learn.png",
    },
    {
      title: "Build",
      content:
        "Apply knowledge in real-world projects. Hackathons, innovation challenges, and open-source collaborations.",
      img: "/assets/images/process/build.png",
    },
    {
      title: "Share",
      content:
        "Showcase projects on GitHub, LinkedIn, and coding platforms. Peer-to-peer teaching and mentoring for juniors.",
      img: "/assets/images/process/share.png",
    },
    {
      title: "Grow",
      content:
        "Leadership opportunities within CodSoc’25. Placements, internships, and networking with tech companies.",
      img: "/assets/images/process/grow.png",
    },
  ];

  return (
    <section className="faq py-120 position-relative z-1 overflow-hidden">
      {/* Background */}
      <Image
        width={1919}
        height={1032}
        src="/assets/images/shapes/faq-bg.png"
        alt="background"
        className="position-absolute tw-start-0 top-0 w-100 h-100 z-n1"
      />

      <div className="container">
        {/* Heading */}
        <div className="tw-mb-8 text-center">
          <span className="tw-py-1 tw-px-705 bg-white text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205">
            How We Work
          </span>
          <h3 className="splitTextStyleOne fw-semibold tw-leading-104">
            Our Working Process
          </h3>
        </div>

        {/* Steps */}
        <div className="row gy-4 justify-content-center">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-delay={index * 100}
            >
              <div className="bg-white tw-p-205 tw-rounded-3xl text-center shadow-sm h-100 tw-flex tw-flex-col tw-items-center tw-gap-4 
                transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
                <Image
                  width={100}
                  height={100}
                  src={step.img}
                  alt={step.title}
                  className="tw-rounded-xl object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <h5 className="fw-semibold">{step.title}</h5>
                <p className="text-neutral-600">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
