import React from "react";
import AboutCounter from "../../components/AboutCounter";
import AboutFeatures from "../../components/AboutFeatures";
import AboutTeamInner from "../../components/AboutTeamInner";
import FooterThree from "../../components/FooterThree";
import HeaderOne from "../../components/HeaderOne";
import PricingPlanTwo from "../../components/PricingPlanTwo";
import TaskManagementOne from "../../components/TaskManagementOne";
import TestimonialsOne from "../../components/TestimonialsOne";
import TopHeaderOne from "../../components/TopHeaderOne";
import AOSWrap from "../../helper/AOSWrap";
import CustomCursor from "../../helper/CustomCursor";
import AboutBannerInner from "../../components/AboutBannerInner";

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import FooterOne from "../../components/FooterOne";
const BrandThree = dynamic(() => import("../../components/BrandThree"));

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "About | SassTech - Saas Software and IT Solution",
    description:
      "Learn more about our SaaS software, team, features, and IT solutions.",
    openGraph: {
      title: "About | SassTech",
      description:
        "Learn more about our SaaS software, team, features, and IT solutions.",
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      <section className='heading-black'>
        {/* CustomCursor */}
        <CustomCursor />

        {/* Top Header One */}
        <TopHeaderOne />

        {/* HeaderOne */}
        <HeaderOne />

        {/* AboutBannerInner */}
        <AboutBannerInner />

        {/* AboutCounter */}
        <AboutCounter />

        {/* AboutFeatures */}
        <AboutFeatures />

        {/* AboutTeamInner */}
        <AboutTeamInner />

        {/* TestimonialsOne */}
        {/* <TestimonialsOne /> */}

        {/* BrandThree */}
        {/* <BrandThree /> */}

        {/* PricingPlanTwo */}
        {/* <PricingPlanTwo /> */}

        {/* TaskManagementOne */}
        {/* <TaskManagementOne /> */}

        {/* FooterThree */}
        {/* <FooterThree /> */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default Page;
