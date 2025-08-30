import Image from "next/image";
import Link from "next/link";
import SearchDomainForm from "./form/SearchDomainForm";

const SearchDomainTwo: React.FC = () => {
  return (
    <section className='search-domain-two pt-120 tw-pb-10 position-relative z-1'>
      <div className='max-w-1524-px mx-auto tw-pt-5'>
        <Image
          width={1523}
          height={1045}
          src='/assets/images/shapes/border-square.png'
          alt='Borders'
          className='position-absolute tw-start-0 top-0 w-100 h-100 z-n1'
        />
        <div className='container'>
          <div className='row gy-5'>
            <div className='col-sm-6'>
              <div className='max-w-444-px mx-auto text-center'>
                <div className='common-shadow-eight tw-py-7 tw-px-705 tw-rounded-xl overflow-hidden'>
                  <Image
                    width={381}
                    height={291}
                    src='/assets/images/thumbs/search-domain-img2.png'
                    alt='Thumb'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='tw-mt-605'>
                  <h5 className='tw-mb-6 line-clamp-2'>
                    Launching a website is easier with AI
                  </h5>
                  <Link
                    href='/register'
                    className='fw-bold tw-text-lg text-decoration-underline text-main-600 hover-text-yellow'
                  >
                    Build your website today
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='max-w-444-px mx-auto text-center'>
                <div className='common-shadow-eight tw-py-7 tw-px-705 tw-rounded-xl overflow-hidden'>
                  <Image
                    width={400}
                    height={290}
                    src='/assets/images/thumbs/search-domain-img1.png'
                    alt='Thumb'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='tw-mt-605'>
                  <h5 className='tw-mb-6 line-clamp-2'>
                    Transfer your Domain Today
                  </h5>
                  <Link
                    href='/register'
                    className='fw-bold tw-text-lg text-decoration-underline text-main-600 hover-text-yellow'
                  >
                    Transfer domain
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='pt-120'>
            <div className='row gy-4 select-domain-wrapper'>
              <div className='col-md-5'>
                <div className='d-flex tw-gap-305 flex-wrap'>
                  <button
                    type='button'
                    className='domain-item-button common-shadow-nine flex-grow-1 tw-min-h-144-px tw-rounded-lg text-center min-w-144-px d-flex flex-column align-items-center justify-content-center animation-item'
                    data-domain='.xyz'
                  >
                    <Image
                      width={75}
                      height={50}
                      src='/assets/images/thumbs/search-domain-two-img1.png'
                      alt='Logo'
                      className='animate__wobble'
                    />
                    <span className='d-block text-heading tw-mt-105 tw-text-sm fw-bold'>
                      $13.34/Yearly
                    </span>
                  </button>
                  <button
                    type='button'
                    className='domain-item-button common-shadow-nine flex-grow-1 tw-min-h-144-px tw-rounded-lg text-center min-w-144-px d-flex flex-column align-items-center justify-content-center animation-item'
                    data-domain='.shop'
                  >
                    <Image
                      width={82}
                      height={47}
                      src='/assets/images/thumbs/search-domain-two-img2.png'
                      alt='Logo'
                      className='animate__wobble'
                    />
                    <span className='d-block text-heading tw-mt-105 tw-text-sm fw-bold'>
                      $13.34/Yearly
                    </span>
                  </button>
                  <button
                    type='button'
                    className='domain-item-button common-shadow-nine flex-grow-1 tw-min-h-144-px tw-rounded-lg text-center min-w-144-px d-flex flex-column align-items-center justify-content-center animation-item'
                    data-domain='.icu'
                  >
                    <Image
                      width={92}
                      height={44}
                      src='/assets/images/thumbs/search-domain-two-img3.png'
                      alt='Logo'
                      className='animate__wobble'
                    />
                    <span className='d-block text-heading tw-mt-105 tw-text-sm fw-bold'>
                      $13.34/Yearly
                    </span>
                  </button>
                  <button
                    type='button'
                    className='domain-item-button common-shadow-nine flex-grow-1 tw-min-h-144-px tw-rounded-lg text-center min-w-144-px d-flex flex-column align-items-center justify-content-center animation-item'
                    data-domain='.site'
                  >
                    <Image
                      width={74}
                      height={58}
                      src='/assets/images/thumbs/search-domain-two-img4.png'
                      alt='Logo'
                      className='animate__wobble'
                    />
                    <span className='d-block text-heading tw-mt-105 tw-text-sm fw-bold'>
                      $13.34/Yearly
                    </span>
                  </button>
                  <button
                    type='button'
                    className='domain-item-button common-shadow-nine flex-grow-1 tw-min-h-144-px tw-rounded-lg text-center min-w-144-px d-flex flex-column align-items-center justify-content-center animation-item'
                    data-domain='.in'
                  >
                    <Image
                      width={61}
                      height={56}
                      src='/assets/images/thumbs/search-domain-two-img5.png'
                      alt='Logo'
                      className='animate__wobble'
                    />
                    <span className='d-block text-heading tw-mt-105 tw-text-sm fw-bold'>
                      $13.34/Yearly
                    </span>
                  </button>
                  <button
                    type='button'
                    className='domain-item-button common-shadow-nine flex-grow-1 tw-min-h-144-px tw-rounded-lg text-center min-w-144-px d-flex flex-column align-items-center justify-content-center animation-item'
                    data-domain='.gives'
                  >
                    <Image
                      width={91}
                      height={58}
                      src='/assets/images/thumbs/search-domain-two-img6.png'
                      alt='Logo'
                      className='animate__wobble'
                    />
                    <span className='d-block text-heading tw-mt-105 tw-text-sm fw-bold'>
                      $13.34/Yearly
                    </span>
                  </button>
                </div>
              </div>
              <div className='col-md-7'>
                <div className='ps-lg-5'>
                  <div>
                    <span className='tw-px-6 tw-py-1 bg-purple text-white rounded-pill fw-medium tw-mb-5'>
                      Find a new domain
                    </span>
                    <h4 className='tw-mb-705'>
                      Web Hosting that's fast and reliable.
                    </h4>
                    <p className='text-neutral-500'>
                      In today's competitive business, the demand for efficient
                      In today's competitive cost-effective IT solutions has
                      never been more critic. business
                    </p>
                  </div>
                  {/* SearchDomainForm */}
                  <div className='tw-mt-8'>
                    <SearchDomainForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchDomainTwo;
