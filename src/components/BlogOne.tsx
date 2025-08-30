import Image from "next/image";
import Link from "next/link";

const BlogOne: React.FC = () => {
  return (
    <section className='blog'>
      <div className='container'>
        <div className='bg-white common-shadow-five py-120 tw-px-90-px'>
          <span className='line w-0 tw-h-2 bg-main-600 tw-mb-4' />
          <div className='d-flex align-items-center justify-content-between tw-mb-12'>
            <h6>
              Insights to help you do what you do better, faster and more
              profitably.
            </h6>
            <Link
              href='/register'
              className='hover-theme hover--translate-y-1 active--translate-y-scale-9 btn btn-main-two hover-style-two button--stroke d-sm-inline-flex d-none align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-9 rounded-pill tw-py-4'
              data-block='button'
            >
              <span className='button__flair' />
              <span className='button__label'>Sign Up Now</span>
            </Link>
          </div>
          {/* Blog items start */}
          <div className='row gy-4'>
            <div
              className='col-sm-6'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={200}
            >
              <div className='group-item'>
                <Link
                  href='/blog-details'
                  className='w-100 h-100 overflow-hidden'
                >
                  <Image
                    width={582}
                    height={319}
                    src='/assets/images/thumbs/blog-img1.png'
                    alt='Blog Image'
                    className='w-100 h-100 object-fit-cover group-hover-item-scale-12 tw-duration-300'
                  />
                </Link>
                <div className='tw-mt-7 d-flex align-items-center tw-gap-5 flex-wrap'>
                  <span className='text-heading fw-medium tw-py-05 tw-px-405 border border-neutral-400 rounded-pill tw-text-base'>
                    02 Apr 2025
                  </span>
                  <span className='text-heading fw-medium tw-text-base'>
                    Comments (03)
                  </span>
                </div>
                <h5 className='tw-mt-4'>
                  <Link
                    href='/blog-details'
                    className='hover-text-main-600 line-clamp-1 tw-mb-3 hover--translate-y-1'
                  >
                    15 Best AI Apps for Android to Make Life Easier
                  </Link>
                </h5>
                <Link
                  href='/blog-details'
                  className='text-main-600 fw-medium tw-text-lg hover--translate-y-1'
                >
                  Learn More
                  <span className='d-inline-flex tw-text-sm'>
                    <i className='ph-bold ph-arrow-up-right' />
                  </span>
                </Link>
              </div>
            </div>
            <div
              className='col-sm-6'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={400}
            >
              <div className='group-item'>
                <Link
                  href='/blog-details'
                  className='w-100 h-100 overflow-hidden'
                >
                  <Image
                    width={582}
                    height={319}
                    src='/assets/images/thumbs/blog-img2.png'
                    alt='Blog Image'
                    className='w-100 h-100 object-fit-cover group-hover-item-scale-12 tw-duration-300'
                  />
                </Link>
                <div className='tw-mt-7 d-flex align-items-center tw-gap-5 flex-wrap'>
                  <span className='text-heading fw-medium tw-py-05 tw-px-405 border border-neutral-400 rounded-pill tw-text-base'>
                    02 Apr 2025
                  </span>
                  <span className='text-heading fw-medium tw-text-base'>
                    Comments (03)
                  </span>
                </div>
                <h5 className='tw-mt-4'>
                  <Link
                    href='/blog-details'
                    className='hover-text-main-600 line-clamp-1 tw-mb-3 hover--translate-y-1'
                  >
                    15 Best man-made intelligence Applications for Android to
                    Make Life More straightforward
                  </Link>
                </h5>
                <Link
                  href='/blog-details'
                  className='text-main-600 fw-medium tw-text-lg hover--translate-y-1'
                >
                  Learn More
                  <span className='d-inline-flex tw-text-sm'>
                    <i className='ph-bold ph-arrow-up-right' />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* Blog items end */}
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
