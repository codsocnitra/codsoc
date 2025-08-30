import Link from "next/link";

const TopHeaderTwo: React.FC = () => {
  return (
    <div className='tw-pt-3 tw-pb-4 position-absolute top-0 tw-start-0 tw-end-0 w-100 tw-z-991'>
      <div className='container max-w-1290-px'>
        <div className='d-flex align-items-center justify-content-between tw-gap-4 flex-wrap'>
          <div className='d-flex align-items-center tw-gap-2 d-sm-flex d-none'>
            <span className='text-white tw-text-base d-flex tw-leading-none'>
              <i className='ph-bold ph-envelope-simple' />
            </span>
            <span className='text-neutral-300 fw-medium tw-text-sm'>
              example@gmail.com
            </span>
          </div>
          <div className='d-flex align-items-center tw-gap-2 d-lg-flex d-none'>
            <span className='text-white tw-text-base d-flex tw-leading-none'>
              <i className='ph-bold ph-tag' />
            </span>
            <span className='text-neutral-300 fw-medium tw-text-sm'>
              Hosting Flash Sale: Starting at $2.59/mo for a limited time
            </span>
          </div>
          <div className='d-flex align-items-center tw-gap-705 justify-content-between justify-content-sm-start flex-sm-grow-0 flex-grow-1'>
            <div className='d-flex align-items-center tw-gap-2'>
              <span className='text-white tw-text-base d-flex tw-leading-none'>
                <i className='ph-bold ph-chat' />
              </span>
              <Link
                href='/live-chat'
                className='text-neutral-300 fw-medium tw-text-sm hover-text-white'
              >
                Live Chat
              </Link>
            </div>
            <div className='d-flex align-items-center tw-gap-2'>
              <span className='text-white tw-text-base d-flex tw-leading-none'>
                <i className='ph-bold ph-user' />
              </span>
              <Link
                href='/login'
                className='text-neutral-300 fw-medium tw-text-sm hover-text-white'
              >
                Login
              </Link>
            </div>
            <div className='group-item has-submenu has-submenu--arrow-end position-relative'>
              <Link
                href='#'
                className='selected-text text-neutral-300 fw-medium tw-text-sm hover-text-white tw-pe-405'
              >
                US Dollar{" "}
              </Link>
              <ul className='selectable-text-list tw-invisible opacity-0 group-hover-item-visible group-hover-item-opacity-1 tw-transition tw-duration-200 bg-neutral-700 tw-py-4 d-flex flex-column tw-gap-1 shadow tw-rounded-md position-absolute top-100 tw-end-0 tw-w-140-px tw-z-99 tw-max-h-260-px overflow-y-auto scroll-sm'>
                <li>
                  <Link
                    href='#'
                    className='text-neutral-300 fw-medium tw-text-sm hover-text-white tw-transition tw-px-4'
                  >
                    US Dollar
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-neutral-300 fw-medium tw-text-sm hover-text-white tw-transition tw-px-4'
                  >
                    British Pound
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-neutral-300 fw-medium tw-text-sm hover-text-white tw-transition tw-px-4'
                  >
                    Japanese Yen
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-neutral-300 fw-medium tw-text-sm hover-text-white tw-transition tw-px-4'
                  >
                    Swiss Franc
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-neutral-300 fw-medium tw-text-sm hover-text-white tw-transition tw-px-4'
                  >
                    Canadian Dollar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderTwo;
