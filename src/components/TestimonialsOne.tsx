"use client";
import Image from "next/image";
import React, { useState } from "react";

const TestimonialsOne: React.FC = () => {
  let [active, setActive] = useState<number>(1);

  return (
    <section className="testimonials py-120 bg-neutral-50 position-relative z-1">
      <Image
        width={1919}
        height={1032}
        src="/assets/images/thumbs/bg2.avif"
        alt="background"
        className="position-absolute tw-start-0 top-0 w-100 h-100 z-n1"
      />
      <div className="container">
        <div className="max-w-602-px mx-auto text-center tw-mb-15">
          <span className="tw-py-1 tw-px-705 bg-neutral-100 tw-text-sm fw-medium text-capitalize rounded-pill tw-mb-205">
            Student Stories
          </span>
          <h3 className="splitTextStyleOne fw-light tw-leading-104 tw-mb-9 d-flex gap-2">
            <span className="d-inline-block fw-medium text-white">
              <span>What</span>{" "}
              <span className="fw-semibold"> Our Students </span>{" "}
              <span> Say</span> <span className="fw-semibold">About CodSoc’25</span>
            </span>
          </h3>
        </div>

        <div className="d-flex tw-gap-6 testimonials-item-wrapper flex-wrap">
          {/* Testimonial 1 */}
          <div
            className={`testimonials-item cursor-pointer bg-white tw-rounded-28-px border border-neutral-100 ${active === 1 && "active"
              }`}
          >
            <div className="current-content" onClick={() => setActive(1)}>
              <div className="tw-max-h-397-px overflow-hidden text-center">
                <Image
                  width={300}
                  height={380}
                  src="/assets/images/thumbs/student1.avif"
                  alt="Student Testimonial"
                  style={{ borderRadius: "16px", marginTop: "4px" }}
                />
              </div>
              <div className="tw-py-8 tw-px-4 text-center">
                <h6 className="tw-mb-2">CSE 4th Year Student</h6>
                <span className="text-neutral-600 fw-medium tw-text-sm">
                  Smart India Hackathon Winner
                </span>
              </div>
            </div>
            <div className="hidden-content tw-px-56-px tw-py-76-px">
              <h4 className="tw-py-4">
                Smart India Hackathon Winner
              </h4>
              <p className="testimonials-item__desc h5 text-heading fw-medium tw-leading-153">
                “CodSoc’25 gave me the confidence to participate in the Smart India Hackathon, where I not only showcased my ideas but also received recognition that strengthened my passion for innovation and problem-solving.”
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            className={`testimonials-item cursor-pointer bg-white tw-rounded-28-px border border-neutral-100 ${active === 2 && "active"
              }`}
          >
            <div className="current-content" onClick={() => setActive(2)}>
              <div className="tw-max-h-397-px overflow-hidden text-center">
                <Image
                  width={300}
                  height={380}
                  src="/assets/images/thumbs/student2.avif"
                  alt="Student Testimonial"
                  style={{ borderRadius: "16px", marginTop: "4px" }}
                />
              </div>
              <div className="tw-py-8 tw-px-4 text-center">
                <h6 className="tw-mb-2">AI-ML 3rd Year Student</h6>
                <span className="text-neutral-600 fw-medium tw-text-sm">
                  Research Contributor
                </span>
              </div>
            </div>
            <div className="hidden-content tw-px-56-px tw-py-76-px">
              <h4 className="tw-py-4">
                Research Contributor
              </h4>
              <p className="testimonials-item__desc h5 text-heading fw-medium tw-leading-153">
                “Thanks to CodSoc’25, I published my first research paper in AI/ML and gained valuable exposure at international conferences. The experience enhanced my research skills, broadened my professional network, and motivated me to pursue further innovations in the field.”
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div
            className={`testimonials-item cursor-pointer bg-white tw-rounded-28-px border border-neutral-100 ${active === 3 && "active"
              }`}
          >
            <div className="current-content" onClick={() => setActive(3)}>
              <div className="tw-max-h-397-px overflow-hidden text-center">
                <Image
                  width={300}
                  height={380}
                  src="/assets/images/thumbs/student3.avif"
                  alt="Student Testimonial"
                  style={{ borderRadius: "16px", marginTop: "4px" }}
                />
              </div>
              <div className="tw-py-8 tw-px-4 text-center">
                <h6 className="tw-mb-2">CSE 2nd Year Student</h6>
                <span className="text-neutral-600 fw-medium tw-text-sm">
                  Internship at Tech Startup
                </span>
              </div>
            </div>
            <div className="hidden-content tw-px-56-px tw-py-76-px">
              <h4 className="tw-py-4">
                Internship at Tech Startup

              </h4>
              <p className="testimonials-item__desc h5 text-heading fw-medium tw-leading-153">
                "The workshops helped me learn React.js and Laravel, which later helped me in my internship at a tech startup. They not only strengthened my technical foundation but also improved my problem-solving skills, teamwork, and confidence in working on real-world projects."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsOne;
