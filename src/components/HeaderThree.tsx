"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const HeaderThree: React.FC = () => {
  let pathname = usePathname();
  const [scroll, setScroll] = useState<boolean>(false);
  let [mobileMenu, setMobileMenu] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const MENU = [
    {
      label: "Home",
      children: [
        { label: "IT Solution", href: "/" },
        { label: "Web Hosting", href: "/demo-2" },
        { label: "Task Management", href: "/demo-3" },
        { label: "CRM Software", href: "/demo-4" },
        { label: "App Landing", href: "/demo-5" },
      ],
    },
    {
      label: "Pages",
      children: [
        { label: "Pricing", href: "/pricing-plan" },
        { label: "About Us", href: "/about" },
        { label: "App Integration", href: "/app-intigration" },
        { label: "Integration Details", href: "/intigration-details" },
        { label: "Privacy Policy", href: "/policy-privacy" },
        { label: "FAQ", href: "/faq" },
        { label: "Project Details", href: "/project-details" },
        { label: "Service Details", href: "/service-details" },
      ],
    },
    {
      label: "Shop",
      children: [
        { label: "Shop", href: "/shop" },
        { label: "Shop Details", href: "/shop-details" },
        { label: "Cart", href: "/cart" },
        { label: "Checkout", href: "/checkout" },
      ],
    },
    {
      label: "Blog",
      children: [
        { label: "Blog", href: "/blog" },
        { label: "Blog Details", href: "/blog-details" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  /* which top‑level submenu is open?  -1 = none */
  const [openIndex, setOpenIndex] = useState<number>(-1);

  /* helper */
  const itemIsActive = (item: any) =>
    item.href === pathname ||
    (item.children &&
      item.children.some((child: any) => child.href === pathname));
  return (
    <>
      <div className='overlay'></div>
      <div className={`side-overlay ${mobileMenu && "active"}`}></div>
      <header
        className={`header three py-0 top-0 tw-start-0 tw-end-0 w-100 tw-z-99 tw-mt-8 position-absolute ${
          scroll && "fixed-header"
        }`}
      >
        <div className='container'>
          <div className='header-three__inner py-2 py-lg-0 tw-lg-ps-12 ps-4 tw-pe-705 bg-white-06 transition-all tw-rounded-lg common-shadow-eleven'>
            <nav className='d-flex align-items-center justify-content-between'>
              {/* Logo Start */}
              <div className='logo'>
                <Link
                  href='/'
                  className='link hover--translate-y-1 active--translate-y-scale-9'
                >
                  <Image
                    width={150}
                    height={30}
                    src='/assets/images/logo/logo-white-two.png'
                    alt='Logo'
                    className='max-w-200-px'
                  />
                </Link>
              </div>
              {/* Logo End  */}
              {/* Menu Start  */}
              <div className='header-menu d-lg-block d-none'>
                {/* Nav menu Three Start */}
                <ul className='nav-menu d-lg-flex align-items-center tw-gap-7'>
                  {MENU.map((item) => {
                    const active = itemIsActive(item);

                    return (
                      <li
                        key={item.label}
                        className={`nav-menu__item ${
                          item.children
                            ? "nav-menu__item has-submenu position-relative"
                            : ""
                        } ${active ? "activePage" : ""}`}
                      >
                        {item.children ? (
                          <Link
                            href='#'
                            className='nav-menu__link hover--translate-y-1 tw-pe-5 text-white tw-py-9 fw-semibold w-100'
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <Link
                            href={item.href}
                            className='nav-menu__link hover--translate-y-1 tw-pe-5 text-white tw-py-9 fw-semibold w-100'
                          >
                            {item.label}
                          </Link>
                        )}

                        {/* Sub‑menu */}
                        {item.children && (
                          <ul className='nav-submenu scroll-sm position-absolute tw-start-0 top-100 tw-w-max bg-white tw-rounded-md overflow-y-auto tw-p-2 tw-mt-4 tw-duration-200 tw-z-99'>
                            {item.children.map((sub) => (
                              <li
                                key={sub.href}
                                className={`nav-submenu__item d-block tw-rounded tw-duration-200 position-relative ${
                                  sub.href === pathname ? "activePage" : ""
                                }`}
                              >
                                <Link
                                  href={sub.href}
                                  className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
                {/* Nav menu Three End  */}
              </div>
              {/* Menu End  */}
              {/* Header Right start */}
              <div className='d-flex align-items-center tw-gap-6'>
                <div className='d-flex align-items-center tw-gap-6'>
                  <Link
                    href='/login'
                    className='d-flex align-items-center tw-gap-105 d-xl-flex d-none text-white'
                  >
                    <span className='text-spring-green d-flex tw-leading-none'>
                      <i className='ph-bold ph-user' />
                    </span>
                    <span className='fw-semibold tw-text-sm '>Sign in</span>
                  </Link>
                  <Link
                    href='/register'
                    className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main-two hover-style-two button--stroke d-lg-flex d-none align-items-center justify-content-center tw-gap-5 group active--translate-y-2 px-xl-4 px-3 tw-rounded-md tw-py-405 fw-bold'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <div className='d-flex align-items-center tw-gap-2 z-1'>
                      <span className='button__label'>Start Free Trial</span>
                      <span className='icon'>
                        <i className='ph-fill ph-cloud-arrow-down' />
                      </span>
                    </div>
                  </Link>
                </div>
                <button
                  onClick={handleMobileMenu}
                  type='button'
                  className='toggle-mobileMenu leading-none d-lg-none text-white tw-text-9'
                >
                  <i className='ph ph-list' />
                </button>
              </div>
              {/* Header Right End  */}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <>
        <div
          className={`mobile-menu d-lg-none d-block scroll-sm position-fixed bg-white tw-w-300-px tw-h-screen overflow-y-auto tw-p-6 tw-z-999 tw--translate-x-full tw-pb-68 ${
            mobileMenu && "active"
          }`}
        >
          <button
            onClick={handleMobileMenu}
            type='button'
            className='close-button position-absolute tw-end-0 top-0 tw-me-2 tw-mt-2 tw-w-605 tw-h-605 rounded-circle d-flex justify-content-center align-items-center text-neutral-900 bg-neutral-200 hover-bg-neutral-900 hover-text-white'
          >
            <i className='ph ph-x' />
          </button>
          <div className='mobile-menu__inner'>
            <Link href='/' className='mobile-menu__logo'>
              <Image
                width={150}
                height={30}
                src='/assets/images/logo/logo.png'
                alt='Logo'
              />
            </Link>

            <div className='mobile-menu__menu'>
              <ul className='nav-menu d-lg-flex align-items-center nav-menu--mobile d-block tw-mt-8'>
                {MENU.map((item, idx) => {
                  const active = itemIsActive(item);
                  const open = idx === openIndex || active;

                  return (
                    <li
                      key={item.label}
                      className={`nav-menu__item ${
                        item.children ? "has-submenu position-relative" : ""
                      } ${active ? "activePage" : ""}`}
                    >
                      {item.children ? (
                        <button
                          type='button'
                          onClick={() => setOpenIndex(open ? -1 : idx)}
                          className='nav-menu__link  tw-pe-5 text-heading tw-py-9 fw-semibold w-100 text-start bg-transparent border-0'
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className='nav-menu__link  text-heading tw-py-9 fw-semibold w-100'
                        >
                          {item.label}
                        </Link>
                      )}

                      {/* ----- submenu ----- */}
                      {item.children && (
                        <ul
                          className={`nav-submenu scroll-sm position-absolute tw-start-0 top-100 tw-w-max bg-white tw-rounded-md overflow-y-auto tw-p-2 tw-mt-4 tw-duration-200 tw-z-99 ${
                            open ? "d-block" : "d-none"
                          }`}
                        >
                          {item.children.map((sub) => (
                            <li
                              key={sub.href}
                              className={`nav-submenu__item d-block tw-rounded tw-duration-200 position-relative ${
                                sub.href === pathname ? "activePage" : ""
                              }`}
                            >
                              <Link
                                href={sub.href}
                                className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <Link
              href='/'
              className='btn btn-main-two hover-style-two button--stroke d-sm-none d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-8 rounded-pill tw-mt-6'
              data-block='button'
            >
              <span className='button__flair' />
              <span className='button__label'>Sign Up Now</span>
            </Link>
          </div>
        </div>
      </>
    </>
  );
};

export default HeaderThree;
