import React from "react";
import dynamic from "next/dynamic";
import AOSWrap from "../../helper/AOSWrap";
import HeaderFive from "../../components/HeaderFive";
import CustomCursor from "../../helper/CustomCursor";
import TopHeaderThree from "../../components/TopHeaderThree";
import BannerFive from "../../components/BannerFive";
import WorkProcessOne from "../../components/WorkProcessOne";
import OfferTwo from "../../components/OfferTwo";
import AboutFeaturesOne from "../../components/AboutFeaturesOne";
import CounterUpTwo from "../../components/CounterUpTwo";
import DownloadAppOne from "../../components/DownloadAppOne";
import AppScreenshotOne from "../../components/AppScreenshotOne";
import FooterFive from "../../components/FooterFive";

const BrandFive = dynamic(() => import("../../components/BrandFive"));
const PricingPlanThree = dynamic(
  () => import("../../components/PricingPlanThree")
);
const TestimonialsFive = dynamic(
  () => import("../../components/TestimonialsFive")
);

import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home - 5 | CodSoc'25 - CodSoc'25 Software and IT Solution",
    description:
      "Learn more about our CodSoc'25 software, team, features, and IT solutions.",
    openGraph: {
      title: "About | CodSoc'25",
      description:
        "Learn more about our CodSoc'25 software, team, features, and IT solutions.",
      url: "https://nextjs.CodSoc'25.webnextpro.com/about",
      type: "website",
      images: [
        {
          url: "https://nextjs.CodSoc'25.webnextpro.com/images/meta.png",
          width: 1200,
          height: 630,
          alt: "About CodSoc'25",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      <section className='home-five'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* TopHeaderThree */}
        <TopHeaderThree />

        {/* HeaderFive */}
        <HeaderFive />

        {/* BannerFive */}
        <BannerFive />

        {/* BrandFive */}
        <BrandFive />

        {/* WorkProcessOne */}
        <WorkProcessOne />

        {/* OfferTwo */}
        <OfferTwo />

        {/* AboutFeaturesOne */}
        <AboutFeaturesOne />

        {/* CounterUpTwo */}
        <CounterUpTwo />

        {/* DownloadAppOne */}
        <DownloadAppOne />

        {/* AppScreenshotOne */}
        <AppScreenshotOne />

        {/* TestimonialsFive */}
        <TestimonialsFive />

        {/* PricingPlanThree */}
        <PricingPlanThree />

        {/* FooterFive */}
        <FooterFive />
      </section>
    </AOSWrap>
  );
};

export default Page;
