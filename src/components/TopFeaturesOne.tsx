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
                Code
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
                Collaborate
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
                Conquer
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
                Collaborate
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
                Code
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
                Collaborate

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
                Conquer
              </span>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TopFeaturesOne;
