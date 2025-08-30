import Image from "next/image";
import Link from "next/link";
import BlogDetailsForm from "./form/BlogDetailsForm";
import BlogSearchForm from "./form/BlogSearchForm";

const BlogDetailsInner: React.FC = () => {
  return (
    <section className='py-120'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-lg-8'>
            <div>
              <div className='position-relative'>
                <Link
                  href='/blog-details'
                  className='w-100 h-100 overflow-hidden'
                >
                  <Image
                    width={884}
                    height={507}
                    src='/assets/images/thumbs/blog-page-img1.png'
                    alt='tech'
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
                <h3 className='tw-mb-4 splitTextStyleOne'>
                  The whimsically named Egg Canvas brainch
                </h3>
                <p className='tw-text-base text-neutral-600 tw-my-9'>
                  he whimsically named Egg Canvas is the brainchild of Erica
                  Choi, a design director and photo Sit amet consect velit
                  integer tincidunt scelerisque volutpat neque fermeny massa
                  lacus. grapher based in York. Why the name “Egg Canvas Erica
                  was inspired by her Korean childhood nickname, which means egg
                  while “canvas” medium with wh art is created. “Egg Canvas
                  therefore, is her life—creating beautiful things each day a
                  blank canvas.
                </p>
                <p className='tw-text-base text-neutral-600 tw-my-9'>
                  {" "}
                  We have covered many special events such as fireworks, fairs,
                  parades, races, walks, awards ceremonies, fashion shows,
                  sporting events, and even a memorial service.
                </p>
                <p className='tw-text-base text-neutral-600 tw-my-9'>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vulputate vestibulum rhon cus, dolor eget viverra
                  pretium, dolor tellus aliquet nunc, vitae ultricies erat elit
                  eu lacus. Vestibulum non justo fun consectetur, cursus ante,
                  tincidunt sapien. Nulla quis diam sit amet turpis interd enim.
                  Vivamus fauc ex sed nibh egestas elementum. Mauris et bibendum
                </p>
                <div className='bg-neutral-100 tw-py-9 tw-px-8'>
                  <p className='tw-text-xl text-main-two-600 fw-bold max-w-660-px'>
                    Your time is limited, so don't waste it living someone
                    else's life. Don't be trapped by dogma - which is living
                    with the results{" "}
                  </p>
                  <div className='tw-mt-9 d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center tw-gap-3'>
                      <span className='tw-w-405 border border-main-two-600' />
                      <span className='fw-medium text-main-two-600'>
                        John Mehedii
                      </span>
                    </div>
                    <span>
                      <Image
                        width={42}
                        height={30}
                        src='/assets/images/icons/quate-blog.svg'
                        alt='tech'
                      />
                    </span>
                  </div>
                </div>
                <div className='tw-mt-10'>
                  <h4 className='tw-mb-8'>
                    Let our investment management team
                  </h4>
                  <div className='d-flex align-items-center flex-wrap justify-content-between flex-wrap-reverse tw-gap-4'>
                    <ul className='d-flex flex-column tw-gap-5'>
                      <li className='d-flex align-items-center tw-gap-4 group'>
                        <span className='tw-w-705 tw-h-705 common-shadow-seven bg-white d-flex justify-content-center align-items-center rounded-circle text-main-600 tw-text-lg group-hover-bg-main-600 group-hover-text-white tw-duration-500'>
                          <i className='ph-bold ph-check' />
                        </span>
                        <p className='text-neutral-600'>
                          Lorem Ipsum generators on the tend to repeat.
                        </p>
                      </li>
                      <li className='d-flex align-items-center tw-gap-4 group'>
                        <span className='tw-w-705 tw-h-705 common-shadow-seven bg-white d-flex justify-content-center align-items-center rounded-circle text-main-600 tw-text-lg group-hover-bg-main-600 group-hover-text-white tw-duration-500'>
                          <i className='ph-bold ph-check' />
                        </span>
                        <p className='text-neutral-600'>
                          {" "}
                          If you are going to use a passage.
                        </p>
                      </li>
                      <li className='d-flex align-items-center tw-gap-4 group'>
                        <span className='tw-w-705 tw-h-705 common-shadow-seven bg-white d-flex justify-content-center align-items-center rounded-circle text-main-600 tw-text-lg group-hover-bg-main-600 group-hover-text-white tw-duration-500'>
                          <i className='ph-bold ph-check' />
                        </span>
                        <p className='text-neutral-600'>
                          Lorem Ipsum generators on the tend to repeat.
                        </p>
                      </li>
                      <li className='d-flex align-items-center tw-gap-4 group'>
                        <span className='tw-w-705 tw-h-705 common-shadow-seven bg-white d-flex justify-content-center align-items-center rounded-circle text-main-600 tw-text-lg group-hover-bg-main-600 group-hover-text-white tw-duration-500'>
                          <i className='ph-bold ph-check' />
                        </span>
                        <p className='text-neutral-600'>
                          {" "}
                          If you are going to use a passage.
                        </p>
                      </li>
                      <li className='d-flex align-items-center tw-gap-4 group'>
                        <span className='tw-w-705 tw-h-705 common-shadow-seven bg-white d-flex justify-content-center align-items-center rounded-circle text-main-600 tw-text-lg group-hover-bg-main-600 group-hover-text-white tw-duration-500'>
                          <i className='ph-bold ph-check' />
                        </span>
                        <p className='text-neutral-600'>
                          Lorem Ipsum generators on the tend to repeat.
                        </p>
                      </li>
                    </ul>
                    <div className='h-100'>
                      <Image
                        width={306}
                        height={256}
                        src='/assets/images/thumbs/invest-img.png'
                        alt='tech'
                        className='w-100 h-100 object-fit-cover'
                      />
                    </div>
                  </div>
                </div>
                <div className='tw-my-16'>
                  <div className='row gy-4'>
                    <div className='col-sm-6'>
                      <div>
                        <Image
                          width={430}
                          height={430}
                          src='/assets/images/thumbs/blog-details-img1.png'
                          alt='tech'
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div>
                        <Image
                          width={430}
                          height={430}
                          src='/assets/images/thumbs/blog-details-img2.png'
                          alt='tech'
                          className='w-100 h-100 object-fit-cover'
                        />
                      </div>
                    </div>
                  </div>
                  <p className='text-neutral-600 tw-mt-11'>
                    We have covered many special events such as fireworks,
                    fairs, parades, races, walks, awards ceremonies, fashion
                    shows, sporting events, and even a memorial service.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                    vestibulum rhoncus, dolor eget viverra pretium, dolor ellus
                    aliquet nunc,
                  </p>
                </div>
                <div className='tw-my-11 d-flex justify-content-between flex-wrap tw-gap-6'>
                  <div className='d-flex align-items-start tw-gap-5'>
                    <span className='tw-text-lg fw-semibold text-main-two-600 flex-shrink-0'>
                      Tag:
                    </span>
                    <div className='d-flex align-items-center flex-wrap tw-gap-3'>
                      <Link
                        href='/blog'
                        className='tw-px-5 tw-py-2 border border-neutral-200 hover-bg-main-600 hover-border-main-600 hover-text-white text-main-two-600 tw-text-sm text-uppercase fw-medium'
                      >
                        Business
                      </Link>
                      <Link
                        href='/blog'
                        className='tw-px-5 tw-py-2 border border-neutral-200 hover-bg-main-600 hover-border-main-600 hover-text-white text-main-two-600 tw-text-sm text-uppercase fw-medium'
                      >
                        Design
                      </Link>
                      <Link
                        href='/blog'
                        className='tw-px-5 tw-py-2 border border-neutral-200 hover-bg-main-600 hover-border-main-600 hover-text-white text-main-two-600 tw-text-sm text-uppercase fw-medium'
                      >
                        apps
                      </Link>
                      <Link
                        href='/blog'
                        className='tw-px-5 tw-py-2 border border-neutral-200 hover-bg-main-600 hover-border-main-600 hover-text-white text-main-two-600 tw-text-sm text-uppercase fw-medium'
                      >
                        data
                      </Link>
                    </div>
                  </div>
                  <div className='d-flex align-items-start tw-gap-5'>
                    <span className='tw-text-lg fw-semibold text-main-two-600 flex-shrink-0'>
                      Share:
                    </span>
                    <ul className='d-flex align-items-center tw-gap-3 justify-content-center'>
                      <li>
                        <Link
                          href='https://www.facebook.com'
                          className='tw-w-10 tw-h-10 rounded-0 text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-neutral-100 hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                        >
                          <i className='ph-bold ph-facebook-logo' />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='https://www.twitter.com'
                          className='tw-w-10 tw-h-10 rounded-0 text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-neutral-100 hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                        >
                          <i className='ph-bold ph-x-logo' />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='https://www.instagram.com'
                          className='tw-w-10 tw-h-10 rounded-0 text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-neutral-100 hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                        >
                          <i className='ph-bold ph-instagram-logo' />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='https://www.youtube.com'
                          className='tw-w-10 tw-h-10 rounded-0 text-main-two-600 tw-text-xl d-flex justify-content-center align-items-center bg-neutral-100 hover-bg-main-600 hover-text-white hover-border-main-600 active-scale-09 tw-duration-200'
                        >
                          <i className='ph-bold ph-youtube-logo' />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <span className='d-block border-top border-neutral-100 tw-my-11' />
                <h5 className='tw-mb-11 splitTextStyleOne'>(04) Comment</h5>
                <div className='tw-mb-15'>
                  <div className='d-flex align-items-start tw-gap-42-px'>
                    <div className='tw-w-75-px tw-h-75-px rounded-circle overflow-hidden flex-shrink-0'>
                      <Image
                        width={72}
                        height={72}
                        src='/assets/images/thumbs/comment-img1.jpg'
                        alt='tech'
                        className='w-100 h-100 object-fit-cover'
                      />
                    </div>
                    <div className='flex-grow-1'>
                      <div className='d-flex align-items-start justify-content-between tw-gap-1'>
                        <div>
                          <h6 className='tw-text-lg line-clamp-1'>
                            Rohan De Spond
                          </h6>
                          <span className='text-neutral-600 tw-text-sm'>
                            25 january 2021
                          </span>
                        </div>
                        <button
                          type='button'
                          className='hover-scale-2 tw-duration-500 flex-shrink-0'
                        >
                          <Image
                            width={29}
                            height={22}
                            src='/assets/images/icons/reply.svg'
                            alt='tech'
                          />
                        </button>
                      </div>
                      <p className='text-neutral-600 tw-mt-3'>
                        There are many variations of passages of Lorem Ipsum
                        available, but the leap into electronic type setting,
                        remaining essentiallyuncha opularisedthe with the
                        release of Letrasetsheets containingth leap
                        electrtypesetting remainingmajority have. There are many
                        variations of passages of Lorem Ipsum
                      </p>
                    </div>
                  </div>
                  <div className='d-flex align-items-start tw-gap-42-px tw-mt-10 tw-ms-106-px'>
                    <div className='tw-w-75-px tw-h-75-px rounded-circle overflow-hidden flex-shrink-0'>
                      <Image
                        width={72}
                        height={72}
                        src='/assets/images/thumbs/comment-img2.png'
                        alt='tech'
                        className='w-100 h-100 object-fit-cover'
                      />
                    </div>
                    <div className='flex-grow-1'>
                      <div className='d-flex align-items-start justify-content-between tw-gap-1'>
                        <div>
                          <h6 className='tw-text-lg line-clamp-1'>
                            Rohan De Spond
                          </h6>
                          <span className='text-neutral-600 tw-text-sm'>
                            25 january 2021
                          </span>
                        </div>
                        <button
                          type='button'
                          className='hover-scale-2 tw-duration-500 flex-shrink-0'
                        >
                          <Image
                            width={29}
                            height={22}
                            src='/assets/images/icons/reply.svg'
                            alt='tech'
                          />
                        </button>
                      </div>
                      <p className='text-neutral-600 tw-mt-3'>
                        There are many variations of passages of Lorem Ipsum
                        available, but the leap into electronic type setting,
                        remaining essentiallyuncha opularisedthe with the
                        release of Letrasetsheets containingth leap
                        electrtypesetting remainingmajority have. There are many
                        variations of passages of Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div className='bg-neutral-100 tw-py-16 tw-px-54-px'>
                  <h5 className='splitTextStyleOne tw-mb-9'>
                    Write your comment
                  </h5>
                  {/* BlogDetailsForm */}
                  <BlogDetailsForm />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 ps-xl-5 ps-lg-4'>
            {/* Sidebar Start */}
            <div className='d-flex flex-column tw-gap-8'>
              <div className='bg-neutral-100 tw-px-8 text-center tw-py-17'>
                <div className='tw-w-95-px tw-h-95-px rounded-circle d-inline-flex'>
                  <Image
                    width={102}
                    height={102}
                    src='/assets/images/thumbs/blogger.png'
                    alt='tech'
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
              <div className='bg-neutral-100 tw-px-8 tw-py-8'>
                <h5 className='border-start border-4 border-main-600 text-main-two-600 tw-ps-2 splitTextStyleOne tw-mb-6'>
                  Search Here
                </h5>
                {/* BlogSearchForm */}
                <BlogSearchForm />
              </div>
              <div className='bg-neutral-100 tw-px-8 tw-py-8'>
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
                        alt='tech'
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
                        alt='tech'
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
                        alt='tech'
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
              <div className='bg-neutral-100 tw-px-8 tw-py-8'>
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
              <div className='bg-neutral-100 tw-px-8 tw-py-8'>
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
                    Oppos
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
                    Oppos
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

export default BlogDetailsInner;
