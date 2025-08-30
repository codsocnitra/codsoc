import Image from "next/image";
import Link from "next/link";

const DownloadAppOne: React.FC = () => {
  return (
    <section className='download-app py-120'>
      <div className='container'>
        <div className='row gy-4 align-items-center'>
          <div className='col-md-6'>
            <div>
              <Image
                width={633}
                height={619}
                src='/assets/images/thumbs/download-app-thumb.png'
                alt='Thumbnail'
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div>
              <div className='max-w-780-px text-start mx-auto'>
                <div
                  className='bg-main-600 tw-py-2 tw-px-7 rounded-pill text-white fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-6 min-w-max common-shadow-twentyNine'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  what we offering
                </div>
                <h2 className='splitTextStyleOne text-heading text-capitalize tw-leading-none'>
                  Why should you choose Sassly mobile app.
                </h2>
                <p className='text-neutral-600 tw-text-lg tw-mt-605 splitTextStyleOne max-w-5 fw-medium tw-leading-145 max-w-570-px'>
                  Sassly-CRM in the past allowing you to focus more on your
                  business simply enjoy your newfound legal time to reflect
                  leaving pen
                </p>
              </div>
              <div className='d-flex flex-column tw-gap-5 tw-mt-12'>
                <div
                  className='d-flex align-items-center tw-gap-205'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={700}
                >
                  <span className='tw-w-8 tw-h-8 bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center tw-text-lg text-heading'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <span className='text-heading tw-text-lg fw-semibold'>
                    Registration and onboarding
                  </span>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-205'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={900}
                >
                  <span className='tw-w-8 tw-h-8 bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center tw-text-lg text-heading'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <span className='text-heading tw-text-lg fw-semibold'>
                    Transaction management
                  </span>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-205'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={1100}
                >
                  <span className='tw-w-8 tw-h-8 bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center tw-text-lg text-heading'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <span className='text-heading tw-text-lg fw-semibold'>
                    {" "}
                    Standard banking layout
                  </span>
                </div>
              </div>
              <div
                className='tw-mt-13'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={1200}
              >
                <Link
                  href='/register'
                  className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-sm-inline-flex d-none align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-9 rounded-pill tw-py-505 fw-semibold common-shadow-inset-one'
                  data-block='button'
                >
                  <span className='button__flair' />
                  <span className='button__label'>Download app now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppOne;
