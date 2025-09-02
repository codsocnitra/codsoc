"use client";
import Image from "next/image";
import Link from "next/link";

const BannerOne: React.FC = () => {
  return (
    <section className="banner tw-py-80-px overflow-hidden section-bg-three position-relative">
      {/* Decorative Shape */}
      <Image
        width={803}
        height={786}
        src="/assets/images/shapes/sqaure_shape.png"
        alt="Shape"
        className="position-absolute top-0 tw-end-0 tw-me-12-percent"
      />

      <div className="container max-w-1400-px">
        <div className="row gy-4 align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div>
              {/* Headline */}
              <h1 className="splitTextStyleOne fw-light tw-leading-104">
                <span className="d-inline-block">Transforming</span>{" "}
                <span className="d-inline-block fw-semibold">Students</span>{" "}
                <span className="d-inline-block fw-semibold">into</span>{" "}
                <span className="d-inline-block fw-semibold">Future-Ready</span>{" "}
                <span className="d-inline-block fw-semibold">Coders 🚀</span>
              </h1>

              {/* Subheadline */}
              <p className="text-neutral-500 tw-text-lg max-w-500-px fw-medium tw-mt-8 splitTextStyleOne">
                Welcome to <span className="fw-semibold">CodSoc’25</span>, the
                official Coding Society of Nitra Technical Campus. Our mission
                is to empower students with the skills, opportunities, and
                confidence to thrive in the digital era.
              </p>

              {/* CTA Buttons */}
              <div className="tw-mt-11 d-flex align-items-center tw-gap-20 flex-wrap">
                <Link
                  href="#join"
                  className="btn btn-main hover-style-one d-sm-inline-flex align-items-center justify-content-center tw-gap-5 fw-semibold rounded-pill tw-px-56-px tw-py-5"
                >
                  Join the Society
                </Link>
                <Link
                  href="#events"
                  className="btn d-sm-inline-flex align-items-center justify-content-center tw-gap-5 fw-semibold rounded-pill tw-px-56-px tw-py-5 "
                  style={{ border: "1px solid #232eccff", color: "#232eccff", marginLeft: "16px" }}
                >
                  Explore Events
                </Link>
              </div>



            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div className="tw-ps-98-px position-relative tw-pb-8">
              <div className="position-relative z-1">
                <Image
                  width={500}
                  height={600}
                  src="/assets/images/thumbs/banner-img.jpg"
                  alt="CodSoc Hero"
                  data-aos="zoom-in"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration={1000}
                  className="rounded"
                />
              </div>

              {/* Floating Badge */}
              <div className="bg-main-600 text-white tw-rounded-3xl tw-px-6 tw-py-4 position-absolute top-0 tw-end-0 tw-mt-4 tw-me-4 common-shadow-two z-1">
                <p className="fw-semibold tw-mb-1">500+ Active Members</p>
                <span className="tw-text-sm">Growing every semester</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
