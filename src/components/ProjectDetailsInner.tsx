import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectDetailsInner: React.FC = () => {
  return (
    <section className='py-120'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-lg-9'>
            <div className='max-w-724-px'>
              <span className='splitTextStyleTwo tw-text-xl fw-bold fst-italic text-decoration-underline text-main-600 tw-mb-305'>
                Safe Transportation &amp; Logistics
              </span>
              <h3 className='splitTextStyleOne tw-mb-8'>
                Deeper Dive into Our Digital Product Design Masterpieces
              </h3>
              <p className='text-neutral-600'>
                Sed ut perspiciatis unde omniste natus voluptatem accusantiume
                rem aperia eaque ipsa quae abillo inventore veritatis quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim epsam
                voluptatem quia voluptas aspernatur odites sed quia
                consequunture
              </p>
            </div>
            <Link
              href='https://themeforest.net/user/webnextpro'
              className='hover-black btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-3 group active--translate-y-2 tw-rounded-lg tw-px-13 tw-py-505 tw-mt-14'
              data-block='button'
            >
              <span className='button__flair' />
              <span className='button__label'>Visit Website</span>
              <span className='text-white tw-text-lg position-relative group-hover-text-white tw-duration-500'>
                <i className='ph ph-caret-right' />
              </span>
            </Link>
          </div>
          <div className='col-lg-3'>
            <div className='bg-neutral-200 tw-p-54-px d-flex flex-column tw-gap-56-px'>
              <div>
                <h6 className='tw-mb-3 fw-semibold'>Clients</h6>
                <span className='text-neutral-600'>Design Studio In USA </span>
              </div>
              <div>
                <h6 className='tw-mb-3 fw-semibold'>Project Type</h6>
                <span className='text-neutral-600'>Digital Product Design</span>
              </div>
              <div>
                <h6 className='tw-mb-3 fw-semibold'>Date</h6>
                <span className='text-neutral-600'>25 October 2023</span>
              </div>
              <div>
                <h6 className='tw-mb-3 fw-semibold'>Website</h6>
                <Link
                  href='https://themeforest.net6ser/webnextpro'
                  className='text-main-600 text-decoration-underline'
                >
                  WowTheme7.Com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='tw-mt-80-px'>
          <div className='row gy-4'>
            <div className='col-sm-4'>
              <div className='h-100'>
                <Image
                  width={390}
                  height={500}
                  src='/assets/images/thumbs/project-details-img1.png'
                  alt='Thumb'
                  className='w-100 h-100 object-fit-cover'
                />
              </div>
            </div>
            <div className='col-sm-8'>
              <div className='h-100'>
                <Image
                  width={807}
                  height={500}
                  src='/assets/images/thumbs/project-details-img2.png'
                  alt='Thumb'
                  className='w-100 h-100 object-fit-cover'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='tw-mt-80-px tw-mb-80-px tw-pb-80-px border-bottom border-neutral-200'>
          <div className='d-flex flex-wrap justify-content-between align-items-start'>
            <div className='max-w-444-px'>
              <h3 className='splitTextStyleOne tw-mb-10'>
                Interesting facts in Development
              </h3>
            </div>
            <div className='max-w-548-px'>
              <p className='text-neutral-600'>
                Must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to
                pursue pleasure rationally encounter
              </p>
              <ul className='xs-grid-cols-2 d-grid tw-gap-6 tw-mt-14'>
                <li className='d-flex align-items-center tw-gap-4'>
                  <span className='text-main-600 d-flex'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <span className='text-main-two-600 fw-bold'>
                    Efficient Sprint Planning
                  </span>
                </li>
                <li className='d-flex align-items-center tw-gap-4'>
                  <span className='text-main-600 d-flex'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <span className='text-main-two-600 fw-bold'>
                    Iterative Delivery Approach
                  </span>
                </li>
                <li className='d-flex align-items-center tw-gap-4'>
                  <span className='text-main-600 d-flex'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <span className='text-main-two-600 fw-bold'>
                    Standups and Demos
                  </span>
                </li>
                <li className='d-flex align-items-center tw-gap-4'>
                  <span className='text-main-600 d-flex'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <span className='text-main-two-600 fw-bold'>
                    Problem-solving
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='tw-mt-80-px tw-mb-80-px tw-pb-80-px border-bottom border-neutral-200'>
          <div className='d-flex flex-wrap justify-content-between align-items-start'>
            <div className='max-w-444-px'>
              <h3 className='splitTextStyleOne tw-mb-10'>
                The Results of Our Project
              </h3>
            </div>
            <div className='max-w-548-px'>
              <p className='text-neutral-600'>
                Will give you a complete account of the system, and expound the
                actual teachings of the great explorer of the truth, the
                master-builder of human happiness rejects, dislikes, or avoids
                pleasure{" "}
              </p>
              <div className='tw-mt-14'>
                <div className='d-flex align-items-center tw-gap-4'>
                  <span className='text-white tw-w-605 tw-h-605 bg-main-600 d-flex justify-content-center align-items-center rounded-circle'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <h6 className='text-main-two-600 fw-bold'>Support clients</h6>
                </div>
                <p className='text-neutral-600 tw-mt-6'>
                  Sed ut perspiciatis unde omnis natus voluptatem accusantium
                  doloremque laudantium, totam rem aperiam inventore
                </p>
              </div>
              <div className='tw-mt-14'>
                <div className='d-flex align-items-center tw-gap-4'>
                  <span className='text-white tw-w-605 tw-h-605 bg-main-600 d-flex justify-content-center align-items-center rounded-circle'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <h6 className='text-main-two-600 fw-bold'>Solve problems</h6>
                </div>
                <p className='text-neutral-600 tw-mt-6'>
                  To take a trivial example, which of us ever undertakes
                  laborious physical exercise, except to obtain some advantage
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='tw-mt-80-px '>
          <div className='row gy-4'>
            <div className='col-sm-6'>
              <div>
                <Link href='/project' className='w-100 h-100'>
                  <Image
                    width={599}
                    height={500}
                    src='/assets/images/thumbs/project-details-img3.png'
                    alt='Thumb'
                    className='w-100 h-100 object-fit-cover'
                  />
                </Link>
                <div className='tw-mt-12'>
                  <Link
                    href='/project'
                    className='text-neutral-600 hover-text-main-600 d-inline-flex align-items-center tw-gap-2 fw-semibold'
                  >
                    <span className='tw-text-lg d-flex'>
                      <i className='ph ph-caret-left' />
                    </span>
                    Prev
                  </Link>
                  <h5 className='tw-mt-6'>
                    <Link
                      href='/project'
                      className='line-clamp-1 hover-underline'
                    >
                      Business Website Design
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div>
                <Link href='/project' className='w-100 h-100'>
                  <Image
                    width={599}
                    height={500}
                    src='/assets/images/thumbs/project-details-img4.png'
                    alt='Thumb'
                    className='w-100 h-100 object-fit-cover'
                  />
                </Link>
                <div className='tw-mt-12 text-end'>
                  <Link
                    href='/project'
                    className='text-neutral-600 hover-text-main-600 d-inline-flex align-items-center tw-gap-2 fw-semibold'
                  >
                    Next
                    <span className='tw-text-lg d-flex'>
                      <i className='ph ph-caret-right' />
                    </span>
                  </Link>
                  <h5 className='tw-mt-6'>
                    <Link
                      href='/project'
                      className='line-clamp-1 hover-underline'
                    >
                      Mobile Application Design
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsInner;
