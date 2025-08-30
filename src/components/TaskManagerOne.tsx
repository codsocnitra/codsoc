import Image from "next/image";

const TaskManagerOne: React.FC = () => {
  return (
    <section className='task-manager pt-120'>
      <div className='container'>
        <div className='row gy-4 flex-wrap-reverse'>
          <div
            className='col-lg-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <div className='task-manager__thumb tw--ms-110-px'>
              <Image
                width={751}
                height={731}
                src='/assets/images/thumbs/task-manager-thumb.png'
                alt='Thumb'
              />
            </div>
          </div>
          <div className='col-lg-6 ps-lg-5'>
            <div className='task-manager__content'>
              <div
                className='bg-white tw-py-3 tw-px-305 rounded-pill fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max border border-spring-green'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                <div className='text-gradient-teal'>
                  Up to{" "}
                  <span className='text-yellow text-stroke-yellow'>70%</span>{" "}
                  off managed cloud hosting
                </div>
              </div>
              <h2 className='splitTextStyleOne text-heading text-capitalize'>
                Powerful &amp; life-saving
                <span className='font-dm-serif fst-italic fw-normal text-gradient-teal'>
                  task manager
                </span>
              </h2>
              <p className='splitTextStyleOne text-neutral-500 tw-mt-8 max-w-570-px fw-medium tw-text-lg'>
                Sassly-CRM in the past allowing you to focus more on your
                business simply enjoy your newfound legal time to reflect
                leaving pen
              </p>
              <div className='tw-mt-13 d-flex flex-column tw-gap-12'>
                <div
                  className='d-flex align-items-start tw-gap-10 animation-item'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <span className='tw-mt-105 animate__wobble'>
                    <Image
                      width={38}
                      height={38}
                      src='/assets/images/icons/task-manager-icon1.svg'
                      alt='Icon'
                    />
                  </span>
                  <div>
                    <h5 className='tw-mb-6'>Automate Task Creation</h5>
                    <p className='text-neutral-600 max-w-432-px'>
                      In today's competitive business, the demand for efficient
                      cost-effective IT solutions has never been more critic.
                    </p>
                  </div>
                </div>
                <div
                  className='d-flex align-items-start tw-gap-10 animation-item'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <span className='tw-mt-105 animate__wobble'>
                    <Image
                      width={40}
                      height={40}
                      src='/assets/images/icons/task-manager-icon2.svg'
                      alt='Icon'
                    />
                  </span>
                  <div>
                    <h5 className='tw-mb-6'>Simplify your daily routines</h5>
                    <p className='text-neutral-600 max-w-432-px'>
                      In today's competitive business, the demand for efficient
                      cost-effective IT solutions has never been more critic.
                    </p>
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

export default TaskManagerOne;
