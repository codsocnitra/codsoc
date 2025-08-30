import Image from "next/image";
import React from "react";

interface BreadcrumbProps {
  title: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  return (
    <section className='breadcrumb section-bg-two mb-0'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='text-center'>
              <span className='tw-mb-4'>
                <Image
                  width={52}
                  height={32}
                  src='/assets/images/logo/favicon-two.png'
                  alt='Favicon Two'
                />
              </span>
              <h1 className='mb-0 splitTextStyleOne text-capitalize'>
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
