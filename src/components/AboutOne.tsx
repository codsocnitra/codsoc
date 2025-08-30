import Image from "next/image";

const AboutOne: React.FC = () => {
  return (
    <section className="py-120 drag-rotate-element-section">
      <div className="container">
        <div className="tw-rounded-50-px gradient-bg-one tw-px-36-px tw-pt-9">
          <div className="row gy-4">
            {/* Left Side Graphics */}
            <div className="col-lg-6">
              <div className="tw-pe-12 position-relative">
                <div className="row g-2">
                  <div className="col-sm-6" data-aos="fade-up" data-aos-duration={800}>
                    <div className="bg-main-600 tw-rounded-3xl tw-p-8 text-center h-100 d-flex flex-column justify-content-center align-items-center">
                      <h3 className="text-white d-inline-flex align-items-center tw-gap-3 tw-mb-9">
                        <span className="d-flex">
                          <Image
                            width={22}
                            height={38}
                            src="/assets/images/icons/arrow-up.svg"
                            alt="growth"
                          />
                        </span>
                        <span>2025</span>
                      </h3>
                      <p className="text-white tw-text-sm">
                        Year CodSoc’25 was founded
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6" data-aos="fade-up" data-aos-duration={800}>
                    <div className="bg-main-two-600 tw-rounded-3xl tw-h-300-px d-flex flex-column justify-content-center align-items-center position-relative">
                      <Image
                        width={277}
                        height={326}
                        src="/assets/images/thumbs/model.png"
                        alt="student community"
                        className="position-absolute tw-start-50 bottom-0 tw-translate-x-50"
                      />
                    </div>
                    <div className="bg-white tw-rounded-lg common-shadow-one border-bottom border-3 border-main-600 tw-px-4 tw-py-2 d-flex align-items-center tw-gap-3 z-1 position-absolute top-0 tw-end-0 tw-mt-194-px">
                      <span className="bg-neutral-200 tw-w-10 tw-h-10 tw-rounded-xl d-flex justify-content-center align-items-center text-neutral-500">
                        <i className="ph-bold ph-smiley" />
                      </span>
                      <div>
                        <h6>
                          <span>NTC</span>
                        </h6>
                        <p className="fw-medium tw-text-sm text-neutral-500">
                          Nitra Technical Campus
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6" data-aos="fade-up" data-aos-duration={800}>
                    <div className="bg-main-two-600 tw-rounded-3xl tw-p-8 text-center d-flex flex-column justify-content-center align-items-center tw-h-300-px">
                      <div className="circle-border d-inline-block">
                        <svg className="radial-progress" data-percentage={100} viewBox="0 0 80 80">
                          <circle className="incomplete " cx={40} cy={40} r={35} />
                          <circle className="complete circle_custom_1" cx={40} cy={40} r={35} />
                          <text
                            className="percentage"
                            x="50%"
                            y="57%"
                            transform="matrix(0, 1, -1, 0, 80, 0)"
                          >
                            100%
                          </text>
                        </svg>
                      </div>
                      <p className="text-white tw-text-sm tw-mt-5">
                        Student-driven initiatives
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6" data-aos="fade-up" data-aos-duration={800}>
                    <div className="myContainer position-relative d-flex flex-column justify-content-center align-items-center h-100 tw-gap-705 overflow-hidden">
                      <span className="drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-1 fw-semibold text-white bg-main-two-600 rounded-pill">
                        Coding Culture
                      </span>
                      <span className="drag-rotate-element cursor-grab min-w-max z-1 tw-px-4 tw-py-1 fw-semibold text-white bg-pink rounded-pill">
                        Hackathons
                      </span>
                      <span className="drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-1 fw-semibold text-white bg-main-600 rounded-pill">
                        Open Source
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-lg-6">
              <div className="common-shadow-three tw-rounded-40-px bg-white tw-ps-56-px tw-pe-6 tw-py-84-px">
                <div className="tw-mb-14">
                  <span className="tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205">
                    About Us
                  </span>
                  <h3 className="splitTextStyleOne fw-light tw-leading-104">
                    <span className="d-inline-block fw-semibold">Who</span>{" "}
                    <span className="d-inline-block">We</span>{" "}
                    <span className="d-inline-block fw-semibold">Are</span>
                  </h3>
                </div>

                <p className="text-neutral-600 tw-mb-6">
                  CodSoc’25 was founded in 2025 as the official coding and innovation society of 
                  <strong> Nitra Technical Campus (NTC), Ghaziabad</strong>.
                </p>

                <ul className="d-flex flex-column tw-gap-6">
                  <li>🚀 Promote coding culture across all years and branches.</li>
                  <li>💡 Encourage innovation through guided projects and hackathons.</li>
                  <li>🧠 Build industry-ready skills with modern frameworks, AI/ML, and open-source exposure.</li>
                  <li>🌍 Connect students with opportunities at the national and international level.</li>
                </ul>

                <p className="text-neutral-600 tw-mt-8">
                  Our society acts as a bridge between academic learning and industry expectations, 
                  ensuring that every student develops practical knowledge, problem-solving ability, 
                  and teamwork skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
