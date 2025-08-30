import Image from "next/image";

const TaskManagementOne: React.FC = () => {
  return (
    <section className='task-management bg-pink-more-light-half drag-rotate-element-section bg-pink-more-light-half'>
      <div className='container'>
        <div className='text-end tw--mb-40-px position-relative z-2'>
          <Image
            width={150}
            height={164}
            src='/assets/images/thumbs/laptop-man.png'
            alt='Image'
            className='tw-me-84-px'
          />
        </div>
        <div className='bg-green-deep tw-rounded-3xl bg-green-deep tw-pt-100-px position-relative z-1'>
          <Image
            width={1290}
            height={596}
            src='/assets/images/shapes/hill-shape.png'
            alt='Hill Shape'
            className='position-absolute w-100 h-100 top-0 tw-start-0 z-n1'
          />
          <Image
            width={210}
            height={220}
            src='/assets/images/thumbs/task-management-img.png'
            alt='Image'
            className='position-absolute tw-end-0 top-0 tw-me-5 tw-mt-5 d-lg-block d-none'
          />
          <div className='tw-mb-8 text-center max-w-570-px mx-auto'>
            <div className='tw-py-3 tw-px-305 rounded-pill fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max text-white bg-white-13'>
              <div>
                Up to{" "}
                <span className='text-yellow text-stroke-yellow'>70%</span> off
                managed cloud hosting
              </div>
            </div>
            <h3 className='splitTextStyleOne text-white'>
              Ready to revolutionize our service?
            </h3>
            <div className='d-block'>
              <a
                href='#'
                className=' hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-13 rounded-0 tw-py-6 fw-bold tw-mt-7'
                data-block='button'
              >
                <span className='button__flair' />
                <div className='d-flex align-items-center tw-gap-2 z-1'>
                  <span className='button__label'>Download for free</span>
                </div>
              </a>
            </div>
            <div className='d-none'>
              <div className='d-flex align-items-center tw-gap-4 justify-content-center flex-wrap'>
                <a
                  href='#'
                  className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-705 tw-rounded-2xl tw-py-6 fw-bold tw-mt-7'
                  data-block='button'
                >
                  <span className='button__flair' />
                  <div className='d-flex align-items-center tw-gap-2 z-1'>
                    <span className='button__label'>Get Started Trial</span>
                  </div>
                </a>
                <a
                  href='#'
                  className='hover--translate-y-1 active--translate-y-scale-9 btn hover-style-two button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-705 tw-rounded-2xl tw-py-6 fw-bold tw-mt-7'
                  data-block='button'
                >
                  <span className='button__flair' />
                  <div className='d-flex align-items-center tw-gap-2 z-1'>
                    <span className='button__label'>Get Started Trial</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='tw-pt-8 text-center'>
            <div className='myContainer position-relative d-flex flex-wrap align-items-center justify-content-center tw-gap-6 tw-pb-16 overflow-hidden w-100 tw-px-6'>
              <span className='drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-2 fw-semibold text-white gradient-bg-six rounded-pill'>
                Project management
              </span>
              <span className='drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-2 fw-semibold text-heading bg-paste rounded-pill'>
                Technology
              </span>
              <span className='drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-2 fw-semibold text-heading gradient-bg-six rounded-pill'>
                Technology
              </span>
              <span className='drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-2 fw-semibold text-heading bg-yellow rounded-pill'>
                Project management
              </span>
              <span className='drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-2 fw-semibold text-heading bg-orange rounded-pill'>
                Technology
              </span>
              <span className='drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-2 fw-semibold text-heading gradient-bg-six rounded-pill'>
                Technology
              </span>
              <span className='drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-2 fw-semibold text-heading bg-orange rounded-pill'>
                Project management
              </span>
              <span className='drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-2 fw-semibold text-heading gradient-bg-six rounded-pill'>
                Technology
              </span>
              <span className='drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-2 fw-semibold text-heading bg-paste rounded-pill'>
                Project management
              </span>
              <span className='drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-2 fw-semibold text-heading bg-pink rounded-pill'>
                Technology
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskManagementOne;
