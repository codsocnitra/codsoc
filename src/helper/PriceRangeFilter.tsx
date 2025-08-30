"use client";
import React, { useState, useRef, useEffect } from "react";

const PriceRangeFilter: React.FC = () => {
  const priceGap = 1000;
  const maxRange = 10000;

  const [minPrice, setMinPrice] = useState<number>(2500);
  const [maxPrice, setMaxPrice] = useState<number>(7500);

  const rangeMinRef = useRef<HTMLInputElement | null>(null);
  const rangeMaxRef = useRef<HTMLInputElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  // Update progress bar visually
  useEffect(() => {
    const minPercent = (minPrice / maxRange) * 100;
    const maxPercent = (maxPrice / maxRange) * 100;
    if (progressRef.current) {
      progressRef.current.style.left = `${minPercent}%`;
      progressRef.current.style.right = `${100 - maxPercent}%`;
    }
  }, [minPrice, maxPrice]);

  // Handle range input changes
  const handleRangeChange = (type: "min" | "max", value: string) => {
    const parsedValue = parseInt(value, 10);
    if (type === "min") {
      if (maxPrice - parsedValue >= priceGap) {
        setMinPrice(parsedValue);
      }
    } else {
      if (parsedValue - minPrice >= priceGap) {
        setMaxPrice(parsedValue);
      }
    }
  };

  // Handle number input changes
  const handleInputChange = (type: "min" | "max", value: string) => {
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) return;
    if (
      type === "min" &&
      maxPrice - parsedValue >= priceGap &&
      parsedValue >= 0
    ) {
      setMinPrice(parsedValue);
    }
    if (
      type === "max" &&
      parsedValue - minPrice >= priceGap &&
      parsedValue <= maxRange
    ) {
      setMaxPrice(parsedValue);
    }
  };

  return (
    <div className='tw-px-8 tw-py-8 common-shadow-nineteen tw-rounded-lg'>
      <h5 className='border-start border-2 border-main-600 text-main-two-600 tw-ps-2 tw-mb-6 text-capitalize'>
        Filter By Price
      </h5>

      {/* Slider Start */}
      <div className='slider relative tw-h-1 tw-bg-gray-300 tw-rounded'>
        <div
          className='progress absolute tw-bg-main-two-600 tw-h-full'
          ref={progressRef}
        ></div>
      </div>

      <div className='range-input tw-relative'>
        <input
          type='range'
          className='range-min absolute tw-w-full'
          min='0'
          max={maxRange}
          value={minPrice}
          step='100'
          onChange={(e) => handleRangeChange("min", e.target.value)}
          ref={rangeMinRef}
        />
        <input
          type='range'
          className='range-max absolute tw-w-full'
          min='0'
          max={maxRange}
          value={maxPrice}
          step='100'
          onChange={(e) => handleRangeChange("max", e.target.value)}
          ref={rangeMaxRef}
        />
      </div>

      <div className='tw-mt-6 d-flex align-items-center justify-content-between'>
        <div className='price-input d-flex align-items-center tw-gap-1'>
          <div className='field'>
            <input
              type='number'
              className='border-0 focus-outline-0 tw-w-11 text-neutral-600 input-min'
              value={minPrice}
              onChange={(e) => handleInputChange("min", e.target.value)}
            />
          </div>
          <span>-</span>
          <div className='field'>
            <input
              type='number'
              className='border-0 focus-outline-0 tw-w-11 text-neutral-600 input-max'
              value={maxPrice}
              onChange={(e) => handleInputChange("max", e.target.value)}
            />
          </div>
        </div>

        <button
          type='button'
          className=' hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-sm-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-6 tw-py-305 tw-text-base fw-semibold tw-rounded-md'
        >
          <span className='button__flair'></span>
          <span className='button__label'>Filter</span>
        </button>
      </div>
      {/* Slider End */}
    </div>
  );
};

export default PriceRangeFilter;
