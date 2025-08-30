import Image from "next/image";
import Link from "next/link";

const DistractionOne: React.FC = () => {
  return (
    <section className='distraction'>
      <div className='container max-w-1290-px'>
        <div className='position-relative distraction__inner'>
          <div className='max-w-602-px w-100 text-center mx-auto position-absolute z-1 tw-start-50 translate-middle-x top-0 mt-5 pt-lg-5 pt-4'>
            <h2 className='splitTextStyleOne text-heading text-capitalize text-capitalize'>
              Avoid
              <span className='font-dm-serif fst-italic fw-normal text-gradient-teal'>
                distractions
              </span>
              with app integrations
            </h2>
          </div>
          <div>
            <Image
              width={1287}
              height={550}
              src='/assets/images/shapes/net-shape.png'
              alt='Net Shape'
              data-aos='zoom-in'
              data-aos-duration={1500}
            />
          </div>
          <div>
            <div className='distraction-icon one position-absolute z-1 animation-scalation'>
              <Image
                width={88}
                height={88}
                src='/assets/images/thumbs/distraction-icon1.png'
                alt='Icon Image'
              />
            </div>
            <div className='distraction-icon two position-absolute z-1 animation-upDown'>
              <Image
                width={104}
                height={104}
                src='/assets/images/thumbs/distraction-icon2.png'
                alt='Icon Image'
              />
            </div>
            <div className='distraction-icon three position-absolute z-1 animation-upDown animation-delay-1'>
              <Image
                width={88}
                height={88}
                src='/assets/images/thumbs/distraction-icon3.png'
                alt='Icon Image'
              />
            </div>
            <div className='distraction-icon four position-absolute z-1 animation-upDown animation-delay-2'>
              <Image
                width={94}
                height={94}
                src='/assets/images/thumbs/distraction-icon4.png'
                alt='Icon Image'
              />
            </div>
            <div className='distraction-icon five position-absolute z-1 animation-scalation animation-delay-1'>
              <Image
                width={88}
                height={88}
                src='/assets/images/thumbs/distraction-icon5.png'
                alt='Icon Image'
              />
            </div>
            <div className='distraction-icon six position-absolute z-1 animation-scalation animation-delay-2'>
              <Image
                width={88}
                height={88}
                src='/assets/images/thumbs/distraction-icon6.png'
                alt='Icon Image'
              />
            </div>
            <div className='distraction-icon seven position-absolute z-1'>
              <Image
                width={94}
                height={94}
                src='/assets/images/thumbs/distraction-icon7.png'
                alt='Icon Image'
              />
            </div>
          </div>
          <div
            className='d-flex align-items-center justify-content-center tw-gap-7 position-absolute z-1 tw-start-50 translate-middle-x bottom-0 mb-2 w-100'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <Link
              href='#'
              className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-13 tw-rounded-md tw-py-6 fw-bold'
              data-block='button'
            >
              <span className='button__flair' />
              <div className='d-flex align-items-center tw-gap-2 z-1'>
                <span className='button__label'>Start Free Trial</span>
                <span className='icon'>
                  <Image
                    width={18}
                    height={16}
                    src='/assets/images/icons/download-cloud-icon.png'
                    alt='Icon'
                  />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistractionOne;
