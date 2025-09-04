import Image from "next/image";
import Link from "next/link";
import FooterSearchFormOne from "./form/FooterSearchFormOne";

const FooterOne: React.FC = () => {
  return (
    <footer className="footer one bg-black position-relative z-1 mt-auto overflow-hidden">
      {/* Footer Top */}
      <div className="py-120">
        <div className="container container-two">
          <div className="row g-5">
            {/* Logo + Search */}
            <div
              className="col-lg-5 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div>
                <Link
                  href="/"
                  className="link hover--translate-y-1 active--translate-y-scale-9 tw-mb-10 d-flex align-items-center"
                >
                  <Image
                    width={149}
                    height={30}
                    src="/assets/images/logo/logo.jpg"
                    alt="logo"
                    style={{ borderRadius: "50%" }}
                  />
                  <Image
                    width={149}
                    height={30}
                    src="/assets/images/logo/logo1.png"
                    alt="logo"
                    className="tw-ms-16"
                  />
                </Link>

                {/* FooterSearchFormOne */}
                <FooterSearchFormOne />
              </div>
            </div>

            {/* Supports */}
            <div
              className="col-lg-2 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div>
                <h5 className="fw-medium text-white tw-mb-8">Supports</h5>
                <ul className="d-flex flex-column tw-gap-4">
                  <li>
                    <Link
                      href="#"
                      className="hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9"
                    >
                      Help &amp; FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9"
                    >
                      Connect Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Location + Contact + Map */}
            <div
              className="col-lg-5 col-sm-12"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <div className="row g-4">
                {/* Location + Contact */}
                <div className="col-md-6">
                  <div>
                    <h5 className="fw-medium text-white tw-mb-8">Locations</h5>
                    <div className="d-flex align-items-center tw-gap-5">
                      <span className="d-flex tw-text-3xl text-main-600">
                        <Image
                          width={20}
                          height={20}
                          src="/assets/images/icons/map.svg"
                          alt="map"
                        />
                      </span>
                      <div>
                        <p className="text-neutral-400 d-block mb-1">
                          NITRA Technical Campus <br />
                          P - Block, Sanjay Nagar, Raj Nagar Sector -23,
                          Ghaziabad
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="fw-medium text-white tw-mt-10 tw-mb-6">
                      Contact
                    </h5>
                    <a
                      href="mailto:codsoc25@nitra.ac.in"
                      className="text-neutral-400 hover--translate-y-1 active--translate-y-scale-9"
                    >
                      codsoc25@nitra.ac.in
                    </a>
                    <div className="d-flex align-items-center tw-gap-5 tw-mt-2">
                      <span className="d-flex tw-text-3xl text-main-600">
                        <Image
                          width={22}
                          height={22}
                          src="/assets/images/icons/phone.svg"
                          alt="phone"
                        />
                      </span>
                      <div>
                        <a
                          href="tel:+913432244344"
                          className="d-block mb-1 tw-text-2xl text-white hover-text-main-600 hover--translate-y-1 active--translate-y-scale-9"
                        >
                          +91 34322 44344
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="col-md-6">
                  <div className="map tw-mt-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.017043267792!2d77.4533476755029!3d28.689136775633788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf19d0066c2bd%3A0xce2128423fa59ccd!2sNITRA%20Technical%20Campus!5e0!3m2!1sen!2sin!4v1756586249673!5m2!1sen!2sin"
                      height={240}
                      width="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ borderRadius: "12px", border: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container">
        <div className="border-top  border-neutral-600 tw-py-8">
          <div className="container container-two">
            <div className="d-flex align-items-center justify-content-between tw-gap-4 flex-wrap">
              <p className="text-white text-line-1 fw-normal">
                &copy; {new Date().getFullYear()}{" "}
                <a
                  href="#"
                  className="fw-medium hover-underline hover--translate-y-1 active--translate-y-scale-9"
                >
                  CodSoc'25
                </a>{" "}
                - Official Coding Society. All rights reserved. Powered by{" "}
                <a
                  href="https://www.nitra.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-medium hover-underline hover--translate-y-1 active--translate-y-scale-9"
                >
                  NITRA Technical Campus
                </a>
              </p>


              <ul className="d-grid d-sm-flex align-items-center tw-gap-6">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61580013342727"
                    className="text--white tw-text-2xl d-flex align-items-center tw-gap-205 hover-text-white hover--translate-y-1 active--translate-y-scale-9"
                  >
                    <span className="text-main-600 d-flex">
                      <i className="ph-fill ph-facebook-logo" />
                    </span>
                    <span className="tw-text-base">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/cods_oc"
                    className="text--white tw-text-2xl d-flex align-items-center tw-gap-205 hover-text-white hover--translate-y-1 active--translate-y-scale-9"
                  >
                    <span className="text-main-600 d-flex">
                      <i className="ph-fill ph-twitter-logo" />
                    </span>
                    <span className="tw-text-base">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cod.soc25?igsh=MWlmeHZhYm9ybW13cA=="
                    className="text--white tw-text-2xl d-flex align-items-center tw-gap-205 hover-text-white hover--translate-y-1 active--translate-y-scale-9"
                  >
                    <span className="text-main-600 d-flex">
                      <i className="ph-fill ph-instagram-logo" />
                    </span>
                    <span className="tw-text-base">Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/cod-soc-ab5241382/"
                    className="text--white tw-text-2xl d-flex align-items-center tw-gap-205 hover-text-white hover--translate-y-1 active--translate-y-scale-9"
                  >
                    <span className="text-main-600 d-flex">
                      <i className="ph-fill ph-linkedin-logo" />
                    </span>
                    <span className="tw-text-base">Linkedin</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pinterest.com"
                    className="text--white tw-text-2xl d-flex align-items-center tw-gap-205 hover-text-white hover--translate-y-1 active--translate-y-scale-9"
                  >
                    <span className="text-main-600 d-flex">
                      <i className="ph-fill ph-pinterest-logo" />
                    </span>
                    <span className="tw-text-base">Pinterest</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
