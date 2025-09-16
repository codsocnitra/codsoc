import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllTeamMembers: React.FC = () => {
  return (
    <section className="about-team py-120">
      <div className="container">
        <div className="max-w-602-px text-center mx-auto tw-mb-13">
          <h3 className="splitTextStyleOne text-heading text-capitalize text-capitalize">
            Meet our teams
          </h3>
          <p className="splitTextStyleOne text-neutral-500 tw-mt-8 max-w-500-px fw-medium">
            Create tasks with various custom statuses to focus more on your keep
            track of the progress of each why{" "}
          </p>
        </div>
        <div className="row gy-4">
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={600}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/lead.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/sidd2604"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/rajatsharma4840_"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="www.linkedin.com/in/sidd2604/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Siddharth Sharma</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Club Lead
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1000}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/colead.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/DeepanshiKashyap"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/deepanshi-kashyap-862952290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Deepanshi Kashyap</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Club Co-Lead
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={800}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/technicalLead.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/sarthak03dot"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com/sarthak03dot"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/sarthak03dot"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/sarthak03dot"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Sarthak Singh</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Technical Lead
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1200}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/editorialLead.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/aakanksha-sain-thakur-2b6485268/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Aakanksha</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Editorial Lead
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1200}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/outreachLead.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Sugandha Srivastava</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Outreach Lead
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1200}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/eventLead.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Kanika Dhaundiyal</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Event Coordinator Lead
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1200}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/technicalCoLead2.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Deepika</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Technical Co-Lead
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1200}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/technicalCoLead1.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/jeetendra-singh-328938315/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Jeetendra Singh</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Technical Co-Lead
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1200}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/editorialCoLead1.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Sachin Yadav</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Editorial Co-Lead
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1200}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/editorialCoLead2.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Akshita Arora</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Editorial Co-Lead
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1200}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/outreachCoLead2.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/Saurabhupadhyay8170"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Saurabh Upadhyay</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Outreach Co-Lead
                </span>
              </div>
            </div>
          </div>{" "}
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1200}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/outreachCoLead1.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/smita-sharma-600531363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Smita Sharma</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Outreach Co-Lead
                </span>
              </div>
            </div>
          </div>{" "}
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1200}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/eventCoLead2.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Siddharth Tiwari</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Event Coordinator Co-Lead
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1200}
          >
            <div className="about-team group-item">
              <div className="position-relative tw-rounded-xl overflow-hidden">
                <Image
                  width={328}
                  height={432}
                  src="/assets/images/team/eventCoLead1.jpg"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://github.com/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-github-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.twitter.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-twitter-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-instagram-logo" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-linkedin-logo" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="tw-mt-705 text-center">
                <h6 className="tw-mb-2">Arpita Gupta</h6>
                <span className="text-capitalize text-neutral-500 tw-text-sm">
                  Event Coordinator Co-Lead
                </span>
              </div>
            </div>
          </div>
          {/* ============ */}
        </div>
      </div>
    </section>
  );
};

export default AllTeamMembers;
