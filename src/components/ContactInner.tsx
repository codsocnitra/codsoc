import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactForm from "./form/ContactForm";

const ContactInner: React.FC = () => {
  return (
    <>
      <section className='bg-neutral-light-half style-two'>
        <div className='container'>
          <div className='bg-white tw-py-9 tw-px-8'>
            <div className='row gy-4'>
              <div className='col-lg-4 col-sm-6'>
                <div className='bg-white tw-rounded-lg tw-py-15 tw-px-5 common-shadow-thirteen hover-bg-main-600 group group-item text-center animation-item tw-transition tw-duration-200 h-100'>
                  <span className='tw-mb-705'>
                    <Image
                      width={56}
                      height={85}
                      src='/assets/images/icons/contact-icon1.svg'
                      alt='Icon'
                      className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                    />
                  </span>
                  <h5 className='group-hover-text-white tw-transition tw-duration-200 tw-mb-5 text-capitalize splitTextStyleOne'>
                    address line
                  </h5>
                  <div className='max-w-250-px mx-auto'>
                    <p className='group-hover-text-white tw-transition tw-duration-200 text-neutral-600 fw-medium tw-text-lg splitTextStyleOne'>
                      NITRA Technical Campus, P - Block Sanjay Nagar Raj Nagar Sector - 23, Ghaziabad
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-6'>
                <div className='bg-white tw-rounded-lg tw-py-15 tw-px-5 common-shadow-thirteen hover-bg-main-600 group group-item text-center animation-item tw-transition tw-duration-200 h-100'>
                  <span className='tw-mb-705'>
                    <Image
                      width={71}
                      height={71}
                      src='/assets/images/icons/contact-icon2.svg'
                      alt='Icon'
                      className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                    />
                  </span>
                  <h5 className='group-hover-text-white tw-transition tw-duration-200 tw-mb-5 text-capitalize splitTextStyleOne'>
                    Phone Number
                  </h5>
                  <div className='max-w-250-px mx-auto'>
                    <a
                      href='tel:+125556865234374221'
                      className='group-hover-text-white tw-transition tw-duration-200 text-neutral-600 fw-medium tw-text-lg splitTextStyleOne'
                    >
                      +91 - 568 - 6523 4374-221
                    </a>
                    <a
                      href='tel:+12555686523'
                      className='group-hover-text-white tw-transition tw-duration-200 text-neutral-600 fw-medium tw-text-lg splitTextStyleOne tw-mt-1'
                    >
                      +91 - 568 - 6523
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-sm-6'>
                <div className='bg-white tw-rounded-lg tw-py-15 tw-px-5 common-shadow-thirteen hover-bg-main-600 group group-item text-center animation-item tw-transition tw-duration-200 h-100'>
                  <span className='tw-mb-705'>
                    <Image
                      width={78}
                      height={68}
                      src='/assets/images/icons/contact-icon3.svg'
                      alt='Icon'
                      className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                    />
                  </span>
                  <h5 className='group-hover-text-white tw-transition tw-duration-200 tw-mb-5 text-capitalize splitTextStyleOne'>
                    Mail Address
                  </h5>
                  <div className='max-w-250-px mx-auto'>
                    <a
                      href='mailto:contact@codsoc25.in'
                      className='group-hover-text-white tw-transition tw-duration-200 text-neutral-600 fw-medium tw-text-lg splitTextStyleOne'
                    >
                      contact@codsoc25.in
                    </a>
                    <a
                      href='mailto:grievance@codsoc.in'
                      className='group-hover-text-white tw-transition tw-duration-200 text-neutral-600 fw-medium tw-text-lg splitTextStyleOne'
                    >
                      grievance@codsoc25.in

                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-120'>
        <div className='container'>
          <div className='row gy-5'>
            <div className='col-lg-6'>
              <div className='pe-xl-5 pe-lg-4'>
                <div>
                  <span className='splitTextStyleTwo tw-text-xl fw-bold fst-italic text-decoration-underline text-main-600 tw-mb-305'>
                    Get In Touch
                  </span>
                  <h3 className='splitTextStyleOne tw-mb-4'>Contact Us</h3>
                  {/* <p className='text-neutral-900'>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque inventore
                  </p> */}
                </div>
                <div className='xs-grid-cols-2 d-grid tw-mt-16 tw-gap-74-px'>
                  <div className='d-flex align-items-start tw-gap-6'>
                    <span className='tw-text-3xl text-main-600 d-flex'>
                      <i className='ph-bold ph-map-pin' />
                    </span>
                    <div>
                      <h6 className='tw-mb-4'>Location</h6>
                      <p className='text-neutral-600'>
                        NITRA Technical Campus, P - Block Sanjay Nagar Raj Nagar Sector - 23, Ghaziabad
                      </p>
                    </div>
                  </div>
                  {/* <div className='d-flex align-items-start tw-gap-6'>
                    <span className='tw-text-3xl text-main-600 d-flex'>
                      <i className='ph-bold ph-phone' />
                    </span>
                    <div>
                      <h6 className='tw-mb-4'>Phone</h6>
                      <a
                        href='tel:+1(368)5678954'
                        className='text-neutral-600 hover-text-main-600'
                      >
                        +91 (368) 567 89 54
                      </a>
                      <a
                        href='tel:+236(456)89622'
                        className='text-neutral-600 hover-text-main-600 tw-mt-1'
                      >
                        +91 (456) 896 22
                      </a>
                    </div>
                  </div> */}
                  <div className='d-flex align-items-start tw-gap-6'>
                    <span className='tw-text-3xl text-main-600 d-flex'>
                      <i className='ph-bold ph-envelope-simple' />
                    </span>
                    <div>
                      <h6 className='tw-mb-4'>Email</h6>
                      <a
                        href='mailto:contact@codsoc25.in'
                        className='text-neutral-600 hover-text-main-600'
                      >
                        contact@codsoc25.in
                      </a>
                      <a
                        href='mailto:grievance@codsoc25.in'
                        className='text-neutral-600 hover-text-main-600'
                      >
                        grievance@codsoc25.in
                      </a>
                    </div>
                  </div>
                  <div className='d-flex align-items-start tw-gap-6'>
                    <span className='tw-text-3xl text-main-600 d-flex'>
                      <i className='ph-bold ph-share-network' />
                    </span>
                    <div>
                      <h6 className='tw-mb-4'>Social</h6>
                      <ul className='d-flex align-items-center tw-gap-3 justify-content-center tw-mt-6'>
                        <li>
                          <Link
                            href="https://www.facebook.com/profile.php?id=61580013342727"
                            className='tw-w-11 tw-h-11 border border-neutral-200 rounded-circle text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-white hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                          >
                            <i className='ph ph-facebook-logo' />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://x.com/cods_oc"
                            className='tw-w-11 tw-h-11 border border-neutral-200 rounded-circle text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-white hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                          >
                            <i className='ph ph-x-logo' />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.instagram.com/cod.soc25?igsh=MWlmeHZhYm9ybW13cA=="
                            className='tw-w-11 tw-h-11 border border-neutral-200 rounded-circle text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-white hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                          >
                            <i className='ph ph-instagram-logo' />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.linkedin.com/in/cod-soc-ab5241382/"
                            className='tw-w-11 tw-h-11 border border-neutral-200 rounded-circle text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-white hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                          >
                            <i className='ph ph-linkedin-logo' />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* map Start */}
                <div className='map tw-mt-15'>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.017043267792!2d77.4533476755029!3d28.689136775633788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf19d0066c2bd%3A0xce2128423fa59ccd!2sNITRA%20Technical%20Campus!5e0!3m2!1sen!2sin!4v1756586249673!5m2!1sen!2sin"
                    className='w-100'
                    height={240}
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  />

                </div>
                {/* map End */}
              </div>
            </div>
            <div className='col-lg-6 ps-lg-5'>
              <div className='bg-neutral-50 tw-py-17 tw-px-705'>
                <h4 className='tw-mb-4'>Fill Up The Form</h4>
                <p className='text-neutral-600 max-w-444-px'>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                {/* ContactForm */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
