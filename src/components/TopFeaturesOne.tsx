import Image from "next/image";
import Marquee from "react-fast-marquee";

const TopFeaturesOne: React.FC = () => {
  return (
    <div className='bg-white border-top border-neutral-100 tw-py-4 common-shadow-one'>
      <div className='container'>
        <div className='top-features-slider overflow-hidden left-right-gradient position-relative'>
          <Marquee>
            <div className='d-flex align-items-center tw-gap-4 px-5'>
              <span>
                <Image
                  width={18}
                  height={17}
                  src='/assets/images/icons/chart-icon.svg'
                  alt='Sasstech Next JS'
                />
              </span>
              <span className='text-heading fw-medium tw-text-base'>
                Perfect solution for success
              </span>
            </div>
            <div className='d-flex align-items-center tw-gap-4 px-5'>
              <span>
                <Image
                  width={18}
                  height={17}
                  src='/assets/images/icons/chart-icon.svg'
                  alt='Sasstech Next JS'
                />
              </span>
              <span className='text-heading fw-medium tw-text-base'>
                Excellence in tailored IT Srvices
              </span>
            </div>
            <div className='d-flex align-items-center tw-gap-4 px-5'>
              <span>
                <Image
                  width={18}
                  height={17}
                  src='/assets/images/icons/chart-icon.svg'
                  alt='Sasstech Next JS'
                />
              </span>
              <span className='text-heading fw-medium tw-text-base'>
                Elevate your brand sasstech
              </span>
            </div>
            <div className='d-flex align-items-center tw-gap-4 px-5'>
              <span>
                <Image
                  width={18}
                  height={17}
                  src='/assets/images/icons/chart-icon.svg'
                  alt='Sasstech Next JS'
                />
              </span>
              <span className='text-heading fw-medium tw-text-base'>
                Achieve business golas solution
              </span>
            </div>
            <div className='d-flex align-items-center tw-gap-4 px-5'>
              <span>
                <Image
                  width={18}
                  height={17}
                  src='/assets/images/icons/chart-icon.svg'
                  alt='Sasstech Next JS'
                />
              </span>
              <span className='text-heading fw-medium tw-text-base'>
                Innnovation in every presence
              </span>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TopFeaturesOne;
