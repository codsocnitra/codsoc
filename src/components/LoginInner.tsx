import Link from "next/link";
import React from "react";
import LoginInnerForm from "./form/LoginInnerForm";

const LoginInner: React.FC = () => {
  return (
    <section className='account py-120'>
      <div className='container'>
        <div className='max-w-514-px bg-white common-shadow-twentyOne tw-rounded-2xl tw-p-60-px mx-auto'>
          <h4 className='tw-mb-8 text-capitalize fst-italic fw-bold text-center max-w-250-px mx-auto'>
            Start Your Journey with us
          </h4>
          {/* LoginInnerForm */}
          <LoginInnerForm />
          <div className='form-check-label text-neutral-600 fw-semibold tw-mt-405 text-center'>
            <span>Are you new here?</span>{" "}
            <Link
              href='/register'
              className='text-decoration-underline text-neutral-600 fw-semibold hover--translate-y-1 active-scale-09 hover-text-main-600'
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginInner;
