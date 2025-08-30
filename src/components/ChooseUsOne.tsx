import Image from "next/image";

const ChooseUsOne: React.FC = () => {
  return (
    <section className="py-120 overflow-hidden">
      <div className="container">
        <div className="row gy-4 gx-5">
          {/* Left side image + icons */}
          <div className="col-lg-5 d-sm-block d-none">
            <div
              className="tw-ps-8 position-relative z-1 overflow-hidden"
              id="box-wrapper"
            >
              <Image
                width={488}
                height={624}
                src="/assets/images/thumbs/choose-us-img.png"
                alt="CodSoc Image"
                className="w-100 h-100 object-fit-cover tw-rounded-3xl"
              />
              <div className="bg-white max-w-150-px tw-h-150-px w-100 d-flex justify-content-center align-items-center tw-rounded-xl common-shadow-four box position-absolute tw-start-0 top-0 tw-mt-705 z-1">
                <Image
                  width={47}
                  height={71}
                  src="/assets/images/thumbs/choose-us-icon1.png"
                  alt="Coding"
                />
              </div>
              <div className="bg-white max-w-150-px tw-h-150-px w-100 d-flex justify-content-center align-items-center tw-rounded-xl common-shadow-four box position-absolute tw-end-0 top-0 tw-mt-705 z-1 tw-me-14">
                <Image
                  width={67}
                  height={70}
                  src="/assets/images/thumbs/choose-us-icon2.png"
                  alt="Hackathon"
                />
              </div>
              <div className="bg-white max-w-150-px tw-h-150-px w-100 d-flex justify-content-center align-items-center tw-rounded-xl common-shadow-four box position-absolute tw-start-0 top-0 z-1 tw-mt-194-px tw-ms-148-px">
                <Image
                  width={70}
                  height={70}
                  src="/assets/images/thumbs/choose-us-icon3.png"
                  alt="Teamwork"
                />
              </div>
              <div className="bg-white max-w-150-px tw-h-150-px w-100 d-flex justify-content-center align-items-center tw-rounded-xl common-shadow-four box position-absolute tw-end-0 bottom-0 tw-me-90-px z-1 tw-mb-148-px">
                <Image
                  width={68}
                  height={58}
                  src="/assets/images/thumbs/choose-us-icon4.png"
                  alt="Open Source"
                />
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="col-lg-7">
            <div className="ps-lg-5">
              <span className="tw-py-1 tw-px-705 bg-main-600 text-white tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205">
                Why Join CodSoc’25
              </span>
              <div className="max-w-672-px">
                <h3 className="fw-light tw-leading-104 cursor-big tw-mb-9">
                  <span className="splitTextStyleOne d-inline-block fw-medium">
                    Unlock opportunities in{" "}
                    <span className="fw-semibold">coding, leadership, and
                    innovation</span> with CodSoc’25.
                  </span>
                </h3>
                <p className="splitTextStyleOne text-neutral-600 max-w-500-px">
                  Join a thriving community of coders, innovators, and leaders,
                  gaining hands-on experience, mentorship, and real-world
                  exposure.
                </p>
              </div>

              {/* Features grid */}
              <div className="tw-mt-10">
                <div className="row gy-4">
                  <div className="col-md-6" data-aos="fade-up" data-aos-duration={600}>
                    <div className="bg-neutral-50 tw-ps-705 tw-pe-4 tw-py-9 border border-neutral-50 hover-border-main-600 tw-rounded-lg tw-duration-300">
                      <h6 className="tw-mb-2">🚀 Hands-On Coding</h6>
                      <p className="text-neutral-500">
                        Regular coding challenges, labs, and projects.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-up" data-aos-duration={700}>
                    <div className="bg-neutral-50 tw-ps-705 tw-pe-4 tw-py-9 border border-neutral-50 hover-border-main-600 tw-rounded-lg tw-duration-300">
                      <h6 className="tw-mb-2">🎯 Industry-Level Exposure</h6>
                      <p className="text-neutral-500">
                        Hackathons, startup projects, and internship support.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-up" data-aos-duration={800}>
                    <div className="bg-neutral-50 tw-ps-705 tw-pe-4 tw-py-9 border border-neutral-50 hover-border-main-600 tw-rounded-lg tw-duration-300">
                      <h6 className="tw-mb-2">🤝 Teamwork & Leadership</h6>
                      <p className="text-neutral-500">
                        Opportunities to lead projects and organize events.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-up" data-aos-duration={900}>
                    <div className="bg-neutral-50 tw-ps-705 tw-pe-4 tw-py-9 border border-neutral-50 hover-border-main-600 tw-rounded-lg tw-duration-300">
                      <h6 className="tw-mb-2">📚 Mentorship</h6>
                      <p className="text-neutral-500">
                        Learn with guidance from faculty mentors and alumni.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-up" data-aos-duration={1000}>
                    <div className="bg-neutral-50 tw-ps-705 tw-pe-4 tw-py-9 border border-neutral-50 hover-border-main-600 tw-rounded-lg tw-duration-300">
                      <h6 className="tw-mb-2">🌍 Open Source Contribution</h6>
                      <p className="text-neutral-500">
                        Collaborate on live GitHub projects and repositories.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-up" data-aos-duration={1100}>
                    <div className="bg-neutral-50 tw-ps-705 tw-pe-4 tw-py-9 border border-neutral-50 hover-border-main-600 tw-rounded-lg tw-duration-300">
                      <h6 className="tw-mb-2">🏆 Recognition & Career Edge</h6>
                      <p className="text-neutral-500">
                        Earn certificates, badges & placement advantages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional stats block */}
              <div
                className="d-flex align-items-center tw-gap-505 tw-mt-8"
                data-aos="fade-up"
                data-aos-duration={1200}
              >
                <h3 className="h1 text-main-600 d-inline-flex align-items-center tw-gap-4">
                  500+
                </h3>
                <p className="text-main-two-600 fw-medium max-w-228-px">
                  Students already part of CodSoc initiatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsOne;
