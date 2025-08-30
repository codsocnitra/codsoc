import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogSearchForm from "./form/BlogSearchForm";
import blogData from "../data/blogs.json";

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  img: string;
};

async function getBlogs(): Promise<Blog[]> {
  // Simulate async fetch
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogData);
    }, 100); // Simulates slight delay
  });
}

const BlogInner: React.FC = () => {
  const blogs = use(getBlogs());
  return (
    <section className='py-120'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-lg-8'>
            <div className='d-flex flex-column tw-gap-15'>
              {blogs.map((item, index) => (
                <div key={index}>
                  <div className='position-relative'>
                    <Link
                      href='/blog-details'
                      className='w-100 h-100 overflow-hidden tw-rounded-3xl'
                    >
                      <Image
                        width={884}
                        height={507}
                        src={item.img}
                        alt='blog_img'
                        className='w-100 h-100 object-fit-cover hover-scale-108 tw-duration-500'
                      />
                    </Link>
                    <h6 className='blog-date tw-duration-300 tw-py-4 text-white d-flex justify-content-center align-items-center max-w-85-px w-100 tw-px-4 text-center tw-rounded-lg fw-medium position-absolute top-0 tw-start-0 tw-mt-4 tw-ms-4 bg-main-600 fw-bold font-body'>
                      24 Feb
                    </h6>
                  </div>
                  <div className='tw-mt-10'>
                    <div className='tw-mb-4 d-flex align-items-center tw-gap-205 flex-wrap'>
                      <div className='d-flex align-items-center tw-gap-2'>
                        <span className='text-main-600 tw-text-lg'>
                          <i className='ph ph-user' />
                        </span>
                        <span className='text-neutral-600 tw-text-sm'>
                          Mehedii .H
                        </span>
                      </div>
                      <span className='tw-w-205 border border-neutral-200' />
                      <div className='d-flex align-items-center tw-gap-2'>
                        <span className='text-main-600 tw-text-lg'>
                          <i className='ph-bold ph-chats-circle' />
                        </span>
                        <span className='text-neutral-600 tw-text-sm'>
                          Comments (03)
                        </span>
                      </div>
                      <span className='tw-w-205 border border-neutral-200' />
                      <div className='d-flex align-items-center tw-gap-2'>
                        <span className='text-main-600 tw-text-lg'>
                          <i className='ph ph-clock' />
                        </span>
                        <span className='text-neutral-600 tw-text-sm'>
                          3 min Read
                        </span>
                      </div>
                    </div>
                    <h4 className='tw-mb-4'>
                      <Link href='/blog-details' className='splitTextStyleOne'>
                        {item.title}
                      </Link>
                    </h4>
                    <p className='tw-text-lg text-neutral-600 max-w-730-px splitTextStyleOne'>
                      {item.excerpt}
                    </p>
                    <Link
                      href='/blog-details'
                      className='text-uppercase tw-text-sm text-main-two-600 fw-bold hover-text-main-600 d-flex align-items-center tw-gap-4 tw-mt-11 tw-tracking-wider'
                    >
                      Read More
                      <span>
                        <Image
                          width={44}
                          height={9}
                          src='/assets/images/icons/arrow-long.svg'
                          alt=''
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-lg-4 ps-xl-5 ps-lg-4'>
            {/* Sidebar Start */}
            <div className='d-flex flex-column tw-gap-8'>
              <div className='bg-neutral-50 tw-px-8 text-center tw-py-17'>
                <div className='tw-w-95-px tw-h-95-px rounded-circle d-inline-flex'>
                  <Image
                    width={884}
                    height={507}
                    src='/assets/images/thumbs/blogger.png'
                    alt=''
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <h6 className='tw-text-base tw-mb-1 tw-mt-4 splitTextStyleOne'>
                  Rosalina D. Willaim
                </h6>
                <span className='text-neutral-600 tw-text-sm splitTextStyleTwo'>
                  Blogger/Photographer
                </span>
                <p className='tw-mt-5 text-neutral-600'>
                  he whimsically named Egg Canvas is the design director and
                  photographer in New York. Why the nam
                </p>
                <ul className='d-flex align-items-center tw-gap-3 justify-content-center tw-mt-6'>
                  <li>
                    <Link
                      href='https://www.facebook.com'
                      className='tw-w-11 tw-h-11 border border-neutral-200 rounded-0 text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-white hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                    >
                      <i className='ph ph-facebook-logo' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.twitter.com'
                      className='tw-w-11 tw-h-11 border border-neutral-200 rounded-0 text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-white hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                    >
                      <i className='ph ph-x-logo' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.instagram.com'
                      className='tw-w-11 tw-h-11 border border-neutral-200 rounded-0 text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-white hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                    >
                      <i className='ph ph-instagram-logo' />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='https://www.youtube.com'
                      className='tw-w-11 tw-h-11 border border-neutral-200 rounded-0 text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-white hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                    >
                      <i className='ph ph-youtube-logo' />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='bg-neutral-50 tw-px-8 tw-py-8'>
                <h5 className='border-start border-4 border-main-600 text-main-two-600 tw-ps-2 splitTextStyleOne tw-mb-6'>
                  Search Here
                </h5>
                {/* BlogDetailsSearchForm */}
                <BlogSearchForm />
              </div>
              <div className='bg-neutral-50 tw-px-8 tw-py-8'>
                <h5 className='border-start border-4 border-main-600 text-main-two-600 tw-ps-2 splitTextStyleOne tw-mb-6'>
                  Recent News
                </h5>
                <div className='d-flex flex-column tw-gap-8'>
                  <div className='d-flex align-items-center tw-gap-6'>
                    <Link
                      href='/blog-details'
                      className='tw-rounded-md overflow-hidden flex-shrink-0'
                    >
                      <Image
                        width={108}
                        height={86}
                        src='/assets/images/thumbs/recent-post-img1.png'
                        alt=''
                        className='w-100 h-100 object-fit-cover hover-scale-2 tw-duration-500'
                      />
                    </Link>
                    <div>
                      <div className='d-flex align-items-center tw-gap-2'>
                        <span className='text-main-600 tw-text-lg'>
                          <i className='ph-bold ph-calendar-dots' />
                        </span>
                        <span className='text-main-two-600 fw-medium tw-text-sm tw-text-sm'>
                          Jan 23,2022
                        </span>
                      </div>
                      <h6 className='tw-mt-2'>
                        <Link
                          href='/blog-details'
                          className='tw-text-base line-clamp-2 text-main-two-600 hover-text-main-600 splitTextStyleOne'
                        >
                          Budget Issues Force The Our To Become
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className='d-flex align-items-center tw-gap-6'>
                    <Link
                      href='/blog-details'
                      className='tw-rounded-md overflow-hidden flex-shrink-0'
                    >
                      <Image
                        width={108}
                        height={86}
                        src='/assets/images/thumbs/recent-post-img2.png'
                        alt=''
                        className='w-100 h-100 object-fit-cover hover-scale-2 tw-duration-500'
                      />
                    </Link>
                    <div>
                      <div className='d-flex align-items-center tw-gap-2'>
                        <span className='text-main-600 tw-text-lg'>
                          <i className='ph-bold ph-calendar-dots' />
                        </span>
                        <span className='text-main-two-600 fw-medium tw-text-sm tw-text-sm'>
                          Jan 23,2022
                        </span>
                      </div>
                      <h6 className='tw-mt-2'>
                        <Link
                          href='/blog-details'
                          className='tw-text-base line-clamp-2 text-main-two-600 hover-text-main-600 splitTextStyleOne'
                        >
                          The Best Products That Shape Fashion
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className='d-flex align-items-center tw-gap-6'>
                    <Link
                      href='/blog-details'
                      className='tw-rounded-md overflow-hidden flex-shrink-0'
                    >
                      <Image
                        width={108}
                        height={86}
                        src='/assets/images/thumbs/recent-post-img3.png'
                        alt=''
                        className='w-100 h-100 object-fit-cover hover-scale-2 tw-duration-500'
                      />
                    </Link>
                    <div>
                      <div className='d-flex align-items-center tw-gap-2'>
                        <span className='text-main-600 tw-text-lg'>
                          <i className='ph-bold ph-calendar-dots' />
                        </span>
                        <span className='text-main-two-600 fw-medium tw-text-sm tw-text-sm'>
                          Jan 23,2022
                        </span>
                      </div>
                      <h6 className='tw-mt-2'>
                        <Link
                          href='/blog-details'
                          className='tw-text-base line-clamp-2 text-main-two-600 hover-text-main-600 splitTextStyleOne'
                        >
                          The Best Products That Shape Fashion
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-neutral-50 tw-px-8 tw-py-8'>
                <h5 className='border-start border-4 border-main-600 text-main-two-600 tw-ps-2 splitTextStyleOne tw-mb-6'>
                  Catagories
                </h5>
                <div className='d-flex flex-column tw-gap-5'>
                  <Link
                    href='/blog'
                    className='bg-white tw-py-4 tw-px-6 text-main-two-600 hover-text-white hover-bg-main-600 group tw-text-lg fw-medium d-flex align-items-center justify-content-between'
                  >
                    Mobile Set
                    <span className='text-main-two-600 group-hover-text-white tw-duration-300 d-flex'>
                      03
                    </span>
                  </Link>
                  <Link
                    href='/blog'
                    className='bg-white tw-py-4 tw-px-6 text-main-two-600 hover-text-white hover-bg-main-600 group tw-text-lg fw-medium d-flex align-items-center justify-content-between'
                  >
                    Mobile Set
                    <span className='text-main-two-600 group-hover-text-white tw-duration-300 d-flex'>
                      03
                    </span>
                  </Link>
                  <Link
                    href='/blog'
                    className='bg-white tw-py-4 tw-px-6 text-main-two-600 hover-text-white hover-bg-main-600 group tw-text-lg fw-medium d-flex align-items-center justify-content-between'
                  >
                    Mobile Set
                    <span className='text-main-two-600 group-hover-text-white tw-duration-300 d-flex'>
                      03
                    </span>
                  </Link>
                  <Link
                    href='/blog'
                    className='bg-white tw-py-4 tw-px-6 text-main-two-600 hover-text-white hover-bg-main-600 group tw-text-lg fw-medium d-flex align-items-center justify-content-between'
                  >
                    Mobile Set
                    <span className='text-main-two-600 group-hover-text-white tw-duration-300 d-flex'>
                      03
                    </span>
                  </Link>
                </div>
              </div>
              <div className='bg-neutral-50 tw-px-8 tw-py-8'>
                <h5 className='border-start border-4 border-main-600 text-main-two-600 tw-ps-2 splitTextStyleOne tw-mb-6'>
                  Populer Tags
                </h5>
                <div className='d-flex tw-gap-3 flex-wrap'>
                  <Link
                    href='/blog'
                    className='bg-white tw-py-4 tw-px-6 text-main-two-600 hover-text-white hover-bg-main-600 tw-text-sm fw-medium text-center d-inline-block'
                  >
                    Tourist
                  </Link>
                  <Link
                    href='/blog'
                    className='bg-white tw-py-4 tw-px-6 text-main-two-600 hover-text-white hover-bg-main-600 tw-text-sm fw-medium text-center d-inline-block'
                  >
                    Traveling
                  </Link>
                  <Link
                    href='/blog'
                    className='bg-white tw-py-4 tw-px-6 text-main-two-600 hover-text-white hover-bg-main-600 tw-text-sm fw-medium text-center d-inline-block'
                  >
                    Cave
                  </Link>
                  <Link
                    href='/blog'
                    className='bg-white tw-py-4 tw-px-6 text-main-two-600 hover-text-white hover-bg-main-600 tw-text-sm fw-medium text-center d-inline-block'
                  >
                    Sky Dive
                  </Link>
                  <Link
                    href='/blog'
                    className='bg-white tw-py-4 tw-px-6 text-main-two-600 hover-text-white hover-bg-main-600 tw-text-sm fw-medium text-center d-inline-block'
                  >
                    hill Climb
                  </Link>
                  <Link
                    href='/blog'
                    className='bg-white tw-py-4 tw-px-6 text-main-two-600 hover-text-white hover-bg-main-600 tw-text-sm fw-medium text-center d-inline-block'
                  >
                    Oppose
                  </Link>
                  <Link
                    href='/blog'
                    className='bg-white tw-py-4 tw-px-6 text-main-two-600 hover-text-white hover-bg-main-600 tw-text-sm fw-medium text-center d-inline-block'
                  >
                    landing
                  </Link>
                  <Link
                    href='/blog'
                    className='bg-white tw-py-4 tw-px-6 text-main-two-600 hover-text-white hover-bg-main-600 tw-text-sm fw-medium text-center d-inline-block'
                  >
                    Oppose
                  </Link>
                </div>
              </div>
            </div>
            {/* Sidebar End */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogInner;
