"use client";
import React, { useState } from "react";

const ProductQty: React.FC = () => {
  let [qty, setQty] = useState<number>(1);
  return (
    <>
      <div className='d-flex'>
        <button
          onClick={() => {
            qty > 1 && setQty(qty - 1);
          }}
          type='button'
          className='text-heading hover-text-main-600 active-scale-09 tw-text-xl tw-w-11 tw-h-11 border border-neutral-200 tw-leading-none decrement-btn'
        >
          <i className='ph-bold ph-minus' />
        </button>
        <input
          value={qty}
          readOnly
          type='text'
          className='border border-neutral-200 bg-neutral-200 tw-w-11 tw-h-11 text-center focus-outline-0 text-heading fw-bold tw-w-11 input-value'
        />
        <button
          onClick={() => setQty(qty + 1)}
          type='button'
          className='text-heading hover-text-main-600 active-scale-09 tw-text-xl tw-w-11 tw-h-11 border border-neutral-200 tw-leading-none increment-btn'
        >
          <i className='ph-bold ph-plus' />
        </button>
      </div>
    </>
  );
};

export default ProductQty;
