import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutTeamInner: React.FC = () => {
  return (
    <section className='about-team py-120'>
      <div className='container'>
        <div className='max-w-602-px text-center mx-auto tw-mb-13'>
          <h3 className='splitTextStyleOne text-heading text-capitalize text-capitalize'>
            Meet our teams
          </h3>
          <p className='splitTextStyleOne text-neutral-500 tw-mt-8 max-w-500-px fw-medium'>
            Create tasks with various custom statuses to focus more on your keep
            track of the progress of each why{" "}
          </p>
        </div>
        <div className='row gy-4'><div
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
                  src="/assets/images/thumbs/clubLead.png"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://www.facebook.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-facebook-logo" />
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
                      href="https://www.pinterest.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-pinterest-logo" />
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
                  src="/assets/images/thumbs/about-team-img.png"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://www.facebook.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-facebook-logo" />
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
                      href="https://www.pinterest.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-pinterest-logo" />
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
                  src="/assets/images/thumbs/technicalLead.png"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://www.facebook.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-facebook-logo" />
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
                      href="https://www.pinterest.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-pinterest-logo" />
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
                  src="/assets/images/thumbs/about-team-img.png"
                  alt="Thumb"
                  className="w-100 h-100 object-fit-cover hover-scale-108 tw-transition tw-duration-300"
                />
                <ul className="list-social position-absolute top-50 tw-end-0 translate-middle-y d-flex flex-column ">
                  <li>
                    <Link
                      href="https://www.facebook.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-facebook-logo" />
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
                      href="https://www.pinterest.com"
                      className="tw-w-11 tw-h-10 bg-app-landing hover-bg-main-600 text-white tw-text-lg d-flex justify-content-center align-items-center"
                    >
                      <i className="ph-fill ph-pinterest-logo" />
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
          </div></div>
        <div className='text-center tw-mt-13'>
          <Link
            href='/Team-members'
            className='hover-theme hover--translate-y-1 active--translate-y-scale-9 btn btn-main-two hover-style-two button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 px-8 tw-rounded-xl tw-py-505 fw-bold text-capitalize'
            data-block='button'
          >
            <span className='button__flair' />
            <div className='d-flex align-items-center tw-gap-2 z-1'>
              <span className='button__label'>all team members</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamInner;